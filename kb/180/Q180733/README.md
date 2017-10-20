---
layout: page
title: "Q180733: HOWTO: Add Context-Sensitive Help to Your ActiveX Control"
permalink: /kb/180/Q180733/
---

## Q180733: HOWTO: Add Context-Sensitive Help to Your ActiveX Control

{% raw %}

	Article: Q180733
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to add context-sensitive Help to an ActiveX Control
	that you create in Visual Basic. By adding this feature to your control, you
	allow the user to quickly access the appropriate Help topics for your control.
	This article addresses the use of the ActiveX control on a Visual Basic form. If
	you use the control in Internet Explorer, you get different behavior.
	
	MORE INFORMATION
	================
	
	You can set a Help topic for your ActiveX control or any of its constituent
	controls. The first step is to identify a Help file for the ActiveX control,
	after which you can set a topic for the control and for each constituent
	control.
	
	To Identify a Help File for an ActiveX Control
	----------------------------------------------
	
	1. Click Project Properties on the Project menu for your ActiveX control
	  project. The Project Properties dialog box appears.
	
	2. On the General tab, type the file name of your Help file in the Help File
	  Name box. This Help file should contain all the topics pertaining to your
	  control.
	
	3. In the Project Help Context ID box of the General tab, type the Context ID
	  number of the topic you want to display for the ActiveX control.
	
	4. Click OK to close the Project Properties dialog box.
	
	  You have just set a Help file topic for your ActiveX control. This topic will
	  appear after you perform one of the following actions:
	
	   - In the Object Browser, right-click your ActiveX control class to display
	     the pop-up menu. In the pop-up menu, click Help.
	
	   - Place the control on a form in a Standard EXE project and select the
	     control and then press the F1 key.
	
	   - When you run your project with the control, set the focus to the control
	     and press the F1 key.
	
	  You can also assign a Help topic to each constituent control in the ActiveX
	  control by setting the HelpContextID property of each constituent control.
	  However, this topic will appear only if you set the WhatsThisButton and
	  WhatsThisHelp properties of the form with the control to True. The topic is
	  displayed only when the user clicks the WhatsThisButton and drags the
	  question mark to the constituent control.
	
	  If the constituent control has the focus and the user presses the F1 key, the
	  topic set for the ActiveX control is displayed, rather than the topic
	  assigned to the constituent control.
	
	REFERENCES
	==========
	
	Visual Basic Books Online: Help; Help Files
	
	Additional query words: kbVBp500 kbActiveX kbIE kbVBp kbDSupport kbdsd kbAutomation kbVBp600 KBCTRLCREATE KBCONTROL
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
