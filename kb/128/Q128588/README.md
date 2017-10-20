---
layout: page
title: "Q128588: BUG: &quot;?&quot; Command with Function &quot;V1&quot; May Not Display Correctly"
permalink: /kb/128/Q128588/
---

## Q128588: BUG: &quot;?&quot; Command with Function &quot;V1&quot; May Not Display Correctly

{% raw %}

	Article: Q128588
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprogramming
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft Visual FoxPro for Windows, versions 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the "?" command with FUNCTION "V1", the characters "ii" or "il" or
	"it" are displayed on the same line. Remove the single asterisk from the front
	of the three commented lines in the code listed in the "Steps to Reproduce
	Problem" section of this article. This extra code causes the V1 function to work
	correctly with each font. It appears to work correctly when sent to a defined
	window instead of the desktop.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Using the "?" command with FUNCTION "V1" does not display correctly when
	characters "ii" or "il" or "it" are in the string. The FUNCTION "V1" should
	display only one character per line.
	
	Steps to Reproduce Problem
	--------------------------
	
	Run the following program:
	
	  CLEAR
	
	  *** Commented Code - See Workaround for Explanation***
	  *DEFINE WINDOW FontHolder FROM 1,5 TO 30,20
	  *ACTIVATE WINDOW FontHolder
	
	  =AFONT(myfonts)
	  m="iillittabc"
	
	  FOR i = 1 TO ALEN(myfonts)
	
	  FOR fontsize = 8 TO 11 ?m FUNCTION "V1" FONT myfonts(i),fontsize WAIT WINDOW
	  ; "Font "+ALLTRIM(STR(i))+" of "+ ; ALLTRIM(STR(ALEN(myfonts)))+" - "+ ;
	  myfonts(i)+' Size '+ALLTRIM(STR(fontsize)) TIMEOUT 2 CLEAR ENDFOR
	
	  ENDFOR
	
	  *RELEASE WINDOW FontHolder
	
	NOTE: In certain fonts or sizes, the letters "ii", "ll" and "it" will appear on
	the same line. Each letter should appear on a separate line.
	
	Additional query words: kbprg kbbuglist FoxWin buglist2.50 buglist2.50a buglist2.50b buglist2.60 buglist2.60a 2.50
	
	======================================================================
	Keywords          : kbprogramming 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
