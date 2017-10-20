---
layout: page
title: "Q122046: BUG: Custom Menu Option Disabled in the Edit Menu"
permalink: /kb/122/Q122046/
---

## Q122046: BUG: Custom Menu Option Disabled in the Edit Menu

{% raw %}

	Article: Q122046
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A custom menu option added to the Edit menu remains disabled after you close the
	Expression Builder dialog box in Report Writer.
	
	WORKAROUND
	==========
	
	To work around this problem, place the MyPref menu option on a menu other than
	Edit. For example, you can create a new menu called Options, and then place the
	MyPref menu option on it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start FoxPro.
	
	2. In the Command window, type "CREATE MENU test" (without the quotation marks).
	
	3. From the Menu menu, choose Quick Menu.
	
	4. Choose the Edit button for the \<Edit prompt.
	
	5. Choose the Insert button, and then type "\<MyPref" (without the quotation
	  marks) for the new prompt.
	
	6. From the Result list box, select Command. In the text box to the right of
	  Command, type the following:
	
	  " WAIT WINDOW "MyPref"" (without the quotation marks)
	
	7. From the Program menu, choose Generate. Generate the output file, using the
	  default filename of TEST.MPR. Close the Menu Builder.
	
	8. Run TEST.MPR.
	
	  Note that the MyPref menu option is enabled.
	
	9. From the File menu, choose New. When prompted for the file type, select the
	  Report radio button, and then choose the New button.
	
	10. In the Report Writer, click the Field tool and then place a field in the
	  Detail band.
	
	11. In the Report Expression dialog box, choose the Expression button to open
	  the Expression Builder dialog box.
	
	12. While the Expression Builder dialog box is open, choose the Edit menu.
	
	  Note that all menu options except Preferences are disabled. This is normal
	  behavior.
	
	13. Choose OK or Cancel to return to the Report Layout window.
	
	14. Choose the Edit menu.
	
	  Note that the MyPref menu option is still disabled.
	
	15. Quit Report Writer.
	
	16. Choose the Edit menu.
	
	The MyPref menu option is still disabled.
	
	NOTE: The MyPref menu option is reenabled as expected when these steps are
	performed in FoxPro for Windows.
	
	Additional query words: VFoxMac FoxMac buglist2.50b buglist2.50c buglist2.60a 2.50b 2.50c menu bar popup pad grayed greyed unavailable
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.5x,2.6a,3.0b
	
	=============================================================================
	

{% endraw %}
