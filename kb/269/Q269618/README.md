---
layout: page
title: "Q269618: BUG: GPF May Occur When ComboBox Control Set on Band of CoolBar"
permalink: /kb/269/Q269618/
---

## Q269618: BUG: GPF May Occur When ComboBox Control Set on Band of CoolBar

{% raw %}

	Article: Q269618
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbVS600sp5fix
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows XP 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows XP 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a Visual Basic application with a ComboBox control set on a band of
	the CoolBar control, it works as expected in versions of Visual Basic earlier
	than Microsoft Visual Studio 6.0 Service Pack 4 (SP4). However, if you are using
	SP4, the application may stop responding (crash) when the form that hosts the
	CoolBar control closes. The crash only occurs on systems that are running on
	Windows 98 or Windows 95.
	
	CAUSE
	=====
	
	This behavior occurs because the controls set on the band of CoolBar are not
	cleared at the correct time.
	
	RESOLUTION
	==========
	
	To work around the problem, add the following line of code to the
	Form_QueryUnload event handler:
	
	  CoolBarName.Bands.Clear
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project with Visual Basic from Visual Studio 6.0 SP4 in
	  Windows 98. Form1 is created by default.
	
	2. On the Components dialog box, press the CTRL+T keys, select Microsoft Windows
	  Common Controls-3 6.0 (Sp4), and then click OK.
	
	3. Add a CoolBar control to Form1. Use the default settings.
	
	4. Add a ComboBox control inside one of the bands of the CoolBar control.
	
	5. Save the project and press the F5 key to run the application. Click the X in
	  the upper-right corner of the form to close the form, and note that an error
	  message similar to the following appears:
	
	  Filename caused a general protection fault in module USER.EXE at
	  0004:00000499.
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	The Filename is the name of your project.
	
	6. Re-open the project inside the Visual Basic integrated development
	  environment (IDE). Sometimes Windows crashes when Visual Basic is re-opened,
	  and you may need to restart your computer. You may also see a "resource is
	  low" message box indicating that you need to shut down other applications or
	  drivers running in the background.
	
	7. Add the following code to Form1:
	
	  
	
	  Private Sub Form_QueryUnload(Cancel As Integer, UnloadMode As Integer)
	      CoolBar1.Bands.Clear
	  End Sub
	
	8. Save the project and press F5 to run the application. Click the X in the
	  upper-right corner of the form to close the form, and note that the project
	  works fine.
	
	  NOTE: If you click the End button in the Visual Basic IDE to end the
	  application, note that you continue to see the problem because the
	  Form_QueryUnload event handler does not have a chance to run. Therefore, do
	  not end your application by using the End button in the IDE. To work around
	  this problem, you can replace the SP4 version of the Comct332.ocx file in the
	  system directory with the Visual Studio 6.0 Service Pack 3 version. You still
	  need to implement the workaround mentioned in last step at the same time.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q189632 BUG: Error in CoolBar Event Can Cause Hanging or Exception
	
	  Q189914 BUG: Wrapped CoolBar Control May GPF Client EXE Program
	
	  Q257630 FIX: Exception Error Closing an Application Containing a CoolBar
	  Control
	
	Additional query words: Comct332 gpf halts halt
	
	======================================================================
	Keywords          : kbVBp600 kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbVS600sp5fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
