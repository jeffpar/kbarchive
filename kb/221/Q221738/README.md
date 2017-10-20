---
layout: page
title: "Q221738: FIX:  Memory Leak With SET SYSMENU OFF"
permalink: /kb/221/Q221738/
---

## Q221738: FIX:  Memory Leak With SET SYSMENU OFF

{% raw %}

	Article: Q221738
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0a,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbContainer kbCtrl kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you repeatedly run a form and the system menu is set off, the following error
	may eventually occur:
	
	  There is not enough memory to complete this operation.
	
	After that message appears, Visual FoxPro may have difficulty performing other
	tasks and report more insufficient memory messages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.This bug was corrected in Visual Studio 6.0 Service
	Pack 3. For more information about Visual Studio service packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	     CLEAR ALL
	     PUBLIC Pubrunform
	     Pubrunform=.T.
	     SET SYSMENU OFF
	
	     ON KEY LABEL ctrl+f8 _SCREEN.FORMS(1).RELEASE()
	     ON ESCAPE Pubrunform=.F.
	     X=1
	     DO WHILE Pubrunform=.T.
	  	WAIT '' TIME .08 && take this out and get ox or forms
	     && is not an object
	  	ox=CREATEOBJECT('form')
	  	ox.CAPTION = ALLTRIM(STR(X)) +' iterations - press escape to quit'
	  	KEYBOARD '{ctrl+f8}'
	  	ox.SHOW(1)
	  	X=X+1
	     ENDDO
	     ON KEY LABEL ctrl+f8
	     SET SYSMENU TO DEFAULT
	     SET SYSMENU AUTO
	     ON ESCAPE
	     RETURN
	
	2. NOTE: If you get either of these messages press Ignore:
	
	  ox is not an object.
	
	  -or-
	
	  forms is not an object.
	
	Eventually, you get the following error:
	
	  There is not enough memory to complete this operation.
	
	The error usually occurs after about 500 iterations. The same behavior happens in
	Visual FoxPro 5.0a and 6.0.
	
	If you look at the VFP6.exe file in the Windows NT 4.0 Task Manager, you will see
	the memory usage increase. However, two Visual FoxPro SYS() functions that look
	at memory usage, SYS(1016) and SYS(1011), do not increase. The error does not
	occur without the SET SYSMENU OFF command.
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbservicepack kbContainer kbCtrl kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
