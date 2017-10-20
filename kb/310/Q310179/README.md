---
layout: page
title: "Q310179: INFO: How to File a Bug Report for Visual FoxPro"
permalink: /kb/310/Q310179/
---

## Q310179: INFO: How to File a Bug Report for Visual FoxPro

{% raw %}

	Article: Q310179
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbvfp700
	Last Modified: 04-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are various techniques that help the Visual FoxPro development team
	reproduce and fix the issues described in your Visual FoxPro bug reports. This
	article provides an overview of some of these techniques, which you may find
	useful in other situations as well.
	
	MORE INFORMATION
	================
	
	To submit a bug report, browse to the following MSDN Online Web site
	
	  Visual FoxPro Support
	  (http://msdn.microsoft.com/vfoxpro/technical/support.asp)
	
	and then click the Submit a Bug Report link. Use the input boxes provided to
	describe your problem, the expected behavior, and the code to reproduce the
	problem.
	
	
	When you report a suspected bug in Visual FoxPro, make the report as automatic as
	possible. If you can copy your code out of the report and paste it into Visual
	FoxPro or an automated test tool, it is much likelier that the error will be
	reproduced and fixed. For example, the following is not an optimal way to report
	a bug:
	
	1. Create a program, and then insert the following code:
	
	  DEFINE CLASS fred98 AS session OLEPUBLIC
	  PROCEDURE mike4
	     RETURN "One ring to rule them all"
	  ENDPROC
	  PROCEDURE mike5
	     RETURN "One ring to bind them"
	  ENDPROC
	  PROCEDURE jenni3
	     RETURN "One ring to bring them all and in the darkness bind them"
	  ENDPROC
	  ENDDEFINE
	
	2. Put the program into a project, and then build a multithreaded DLL.
	
	3. Use a CreateObject function on the DLL that you just created, and then call
	  Mike4.
	
	Although, those are perfectly valid steps, they require excessive modification
	before they can be added to a test suite. In addition, the report includes
	methods that do not have anything to do with the problem at hand.
	
	A concise description of what you expect is particularly important, and
	indicating why -- for example, if the Help file states that something should
	work, the bug may be located in the Help file, as well as in the code.
	
	Note how the following steps are very clear, include only relevant code, describe
	exactly the behavior that you expect to occur, and then describe the behavior
	that actually occurs:
	
	- Run the following code:
	
	  TEXT TO lcRepro NOSHOW 
	  DEFINE CLASS reproClass AS session OLEPUBLIC
	     PROCEDURE reproMethod
	         RETURN "This should return correctly."
	     ENDPROC
	  ENDDEFINE
	  ENDTEXT
	
	  STRTOFILE(lcRepro, "classPrg.prg")
	  BUILD PROJECT reproProj FROM classPrg.prg
	  BUILD MTDLL reproDLL FROM reproProj
	
	  loReproObj = CREATEOBJECT("reproDLL.reproClass")
	  lcRetVal = loReproObj.reproMethod()
	
	Expected behavior:
	
	lcRetVal equal to "This should return correctly."
	
	Actual behavior:
	
	Visual FoxPro starts humming a marching tune.
	In the bug report's "More Information" section, you can include your operating
	system version (including service packs), computer information (video card and
	driver are relevant for problems involving screen display, and occasionally
	other issues), and the results of any other testing that you have done. If you
	have a workaround, provide that as well: Documentation of a workaround can be
	preferable to fixing the bug, because bug fixes can introduce bugs elsewhere in
	the code.
	
	As another possibility, you may need to demonstrate what happens when you click a
	particular button. However, you cannot add code to a button at runtime, so you
	need to create a button class first, as in the following example:
	
	  loForm = CREATEOBJECT("Form")
	  loForm.AddObject("cmdTest", "cmdRepro")
	  loForm.cmdTest.Click()
	
	  DEFINE CLASS cmdRepro AS CommandButton
	  PROCEDURE Click
	     MESSAGEBOX("This is the custom click button we defined.")
	  ENDPROC
	  ENDdefine
	
	However, note that this sample code is not as good an example as the previous
	one: Because it forces the tester to view output onscreen instead of comparing a
	string value, it cannot be automated in the same way.
	
	If you want to show an error that occurred while you were designing the form
	instead of running it, you can use the ASELOBJ function, as follows:
	
	  MODIFY FORM myTestForm NOWAIT
	  ASELOBJ(laForm, 1)  && The 1 gives the container of the selected object. 
	                      && While there isn't a selected object in this case,
	                      && you still get the form designer reference.
	  loForm = laForm(1)
	
	  loForm.AddObject("cmdProblem", "commandButton")
	
	  loForm.AddObject("txtDisplay", "textbox")
	  loForm.txtDisplay.Top = 100
	  loForm.txtDisplay.Width = 200
	
	Finally, if all else fails, you can use the KEYBOARD command to stuff keystrokes
	into the IDE, as follows:
	
	1. Run the following code:
	
	  CREATE FORM form1 NOWAIT 
	  ASELOBJ(laObj, 1)
	  laObj(1).AddObject("cmdTest", "CommandButton")
	  laObj(1).cmdTest.SaveAsClass("corrupt2", "myButton")
	
	  CREATE FORM form2 NOWAIT
	  ASELOBJ(laObj, 1)
	  laObj(1).NewObject("cmdTest", "myButton", "corrupt2")
	  laObj(1).cmdTest.SetFocus()
	  *!* Here's where it gets interesting: I can't SaveAsClass with a live
	  *!* reference, so I have to stuff keystrokes into the menus and 
	  *!* dialogs.
	  *!* ALT-F + L = Save As Class...
	  *!* myButton = name of class
	  *!* corrupt2 = class library
	  *!* y = Yes, overwrite previous definition
	  RELEASE laObj
	  KEYBOARD "{ALT+F}L{PAUSE 1}myButton{TAB}corrupt2{ENTER}{PAUSE 1}Y{PAUSE 1}"
	  *!* Close the form designer windows.
	  KEYBOARD "{CTRL+W}"
	  KEYBOARD "{CTRL+W}"
	
	2. Quit Visual FoxPro.
	
	3. Start Visual FoxPro, and then attempt to MODIFY FORM form2.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
