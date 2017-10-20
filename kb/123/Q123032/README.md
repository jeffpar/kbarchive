---
layout: page
title: "Q123032: BUG: SKIP Produces Unexpected Results"
permalink: /kb/123/Q123032/
---

## Q123032: BUG: SKIP Produces Unexpected Results

{% raw %}

	Article: Q123032
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.60
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, version 2.60 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SKIP clause on a BAR of a POPUP, FoxPro for Windows disables
	the menu choice but still displays the disabled choice and allows the disabled
	choice to be selected.
	
	RESOLUTION
	==========
	
	Use an IF _WINDOWS clause to bracket the code. Then define the POPUP and BARs
	without the SKIP option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The SKIP clause does not work in FoxPro for Windows but does work as documented
	in FoxPro for MS-DOS. For example, the following code works correctly in FoxPro
	for MS-DOS but not in FoxPro for Windows:
	
	    DEFINE POPUP CAmenu FROM 5,23 TO 23,53
	    DEFINE BAR 1 OF CAmenu PROMPT "          Main Menu"   SKIP
	    DEFINE BAR 2 OF CAmenu PROMPT "-----------------------------"   SKIP
	    DEFINE BAR 3 OF CAmenu PROMPT "  Application, Inquiry, HSQ"
	    ACTIVATE POPUP CAmenu
	
	Code to Reproduce Problem
	-------------------------
	
	Run the following code in FoxPro for Windows:
	
	    DEFINE POPUP CAmenu FROM 5,23 TO 23,53
	    DEFINE BAR 1 OF CAmenu PROMPT "          Main Menu"   SKIP
	    DEFINE BAR 2 OF CAmenu PROMPT "-----------------------------"   SKIP
	    DEFINE BAR 3 OF CAmenu PROMPT "  Application, Inquiry, HSQ"
	    ACTIVATE POPUP Camenu
	   
	    ON SELECTION BAR 1 WAIT WINDOW 'Bar 1'
	    ON SELECTION BAR 2 WAIT WINDOW 'Bar 2'
	    ON SELECTION BAR 3 WAIT WINDOW 'Bar 3'
	
	Even though you can select Bars 1 and 2 by using the cursor keys, no WAIT WINDOW
	appears for them.
	
	Additional query words: FoxWin buglist2.60 disable prompt
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch
	Version           : WINDOWS:2.60
	
	=============================================================================
	

{% endraw %}
