using UnityEngine;

public class Player : MonoBehaviour {
    public float speed = 1.5f;
    void Update() {
        transform.Rotate(0, 30f * Time.deltaTime * speed, 0);
    }
}
