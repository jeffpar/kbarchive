---
layout: page
title: "Q134309: PRB: Timer Event Does Not Fire If Timer Object Is on a Toolbar"
permalink: /kb/134/Q134309/
---

## Q134309: PRB: Timer Event Does Not Fire If Timer Object Is on a Toolbar

{% raw %}

	Article: Q134309
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Timer event of a Timer object on a toolbar does not fire.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On the FoxPro File menu, click New, and then Class. Then select New File from
	  the New dialog box.
	
	2. Type tbrTestbar for the Class Name. Select Toolbar from the Based On menu.
	  Type test for the Store In option. Click OK.
	
	3. Select the Timer Object from the Form Controls Toolbar, and then click the
	  new toolbar in the Class Designer window to place it on the toolbar.
	
	4. Go to the Properties window. If it is not already visible, use the right
	  mouse button to click the new timer object on the toolbar. Then select
	  Properties from the menu.
	
	5. Set the Interval property of the Timer to 200.
	
	6. Double-click the Timer event to open the editor for that method. Type the
	  following command in the code window:
	
	     WAIT WINDOW "Timer Event fired"
	
	7. On the File menu, click Close to close the Timer event code window.
	
	8. On the File menu, click Close to close the Class Designer. Click Yes to save
	  the changes.
	
	9. Type the following code in the Command window to create an instance of the
	  toolbar:
	
	     SET CLASSLIB TO test.vcx
	     tbrTimer = CREATEOBJECT('tbrTestbar')
	     tbrTimer.Show   && to verify you successfully created the Toolbar
	
	The WAIT WINDOW is never displayed because the Timer event is not firing.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
