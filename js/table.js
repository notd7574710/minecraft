var classnum;
function createTable() {
    var c1 = document.getElementbyId("1");
    var c2 = document.getElementbyId("2");
    var c3 = document.getElementbyId("3");
    var img = document.getElementsbyClassname("img");
    var ifr = document.getElementsbyClassname("ifr);
                                              
    for(int i=0; i<3; i++) {
        img[i].setAttribute("alt", "테스트" + i);
        ifr[i].setAttribute("alt", "테스트" + i);
}

function upper(str) {
    
}

//-------------------------------------------------------------------------------------------
function help() {
    alert(
        "궁지에 몰리다 : 아군에게 빨간색 십자가가 뜨는 모든 상황\n\n붙잡혀 넘어지다 : 다수의 일반좀비/특수좀비에게 붙들려 행동불능이 된 상황\n무력화 : 체력보다 높은 피해를 입어 출혈 타이머가 작동하며 행동불능이 된 상황\n"
    );
    alert(
        "강화된 중화기 : 탄약 50% 증가, 피해량 50% 증가\n*로켓 런처는 탄약이 증가하지 않음\n\n연속 처치 : 정해진 시간 내에 정해진 수만큼 처치하는 것\n*연달아 처치는 정해진 시간이 없음"
    );
    alert(
        "자체 쿨타임 : 명시되어 있지 않지만 3~5초 정도의 쿨타임을 가지는 것\n\n매우 짧은 자체 쿨타임 : 총알 한 발당 적용되는 스킬들은 ~0.1초 가량의 매우 짧은 쿨타임을 가진다"
    );
    alert(
        "최대 처치량 : 폭발물, 근접무기등을 포함한 모든 무기는 한 번에 처치 가능한 적의 수가 제한되어 있다.\n데미지가 아무리 높아도 최대 처치량이 2마리로 제한되어 있다면 나머지 적들은 피해를 입지 않는다."
    );
}
