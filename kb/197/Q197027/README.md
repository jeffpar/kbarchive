---
layout: page
title: "Q197027: BUG: WhatsThisHelpID on Toolbar Does Not Function as Expected"
permalink: kb/197/Q197027/
---

## Q197027: BUG: WhatsThisHelpID on Toolbar Does Not Function as Expected

	Article: Q197027
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbOOP kbvfp500aBUG kbvfp600bug
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  WTHelp.exe
	  (http://support.microsoft.com/download/support/mslfiles/WTHelp.exe)
	
	  Release Date: Dec-09-1998
	
	  For more information about downloading files from the Microsoft Software
	  Library, please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	 File Name               Size
	  ---------------------------------------------------------
	
	  Readme.txt               10,324 bytes
	  Help2.bmp                 1,318 bytes
	  Whatthis.hlp             13,660 bytes
	  Whatthis.hpj                631 bytes
	  Whatthis.rtf             18,902 bytes
	  WhatsThisHelp.vcx         2,122 bytes
	  WhatsThisHelp.vct         1,910 bytes
	  WhatsThis.scx             2,014 bytes
	  WhatsThis.sct            10,980 bytes
	
	NOTE: Four of these files ship with Visual FoxPro.
	
	To work with the sample files, extract them into a directory of your choice and
	set the Visual FoxPro default to the directory you choose.
	
	Help2.bmp is one of the sample graphics files found in the
	...\Graphics\Bitmaps\TlBr_W95 folder in the VFP\Samples folder with Visual
	FoxPro 5.x or in the Common folder for Visual Studio or Visual FoxPro 6.0.
	
	The three files, Whatthis.hlp, Whatthis.hpj and Whatthis.rtf, are a sample
	Windows Help file, the Help project file, and the Help text source rich text
	file. These files ship with Visual FoxPro and are found in the
	...\Solution\Forms folder, which is found in the VFP\Samples folder with Visual
	FoxPro 5.x or the Visual Studio\MSDN98\98vs\1033\Samples\VFP98 folder with
	Visual Studio 6.0. These files have not been modified and are included to
	provide a sample Help file with WhatsThisHelp ID numbers. The Help text in this
	Help file does not match the controls on the sample form included herein. This
	is just an illustration.
	
	The remaining files listed in the previous table were created for this sample.
	
	The WhatsThisHelp.vcx and .vct files are a visual class library that contains the
	toolbar class definition that is used with the sample form.
	
	The sample form files are WhatsThis.scx and .sct.
	
	Working with the Sample Form
	----------------------------
	
	To see the problem and the workaround, run the WhatsThis.scx form. Follow these
	steps when the form is running:
	
	1. Click WhatsThisHelp on the form (it is the button in the top-right corner
	  with the "?" on it).
	
	2. Click on any of the objects on the form (even the form itself). Repeat this
	  until you have tested all the objects.
	
	  The form should display the following WhatsThisHelp topic for the CustomerID
	  from the Help file:
	
	  Contains a unique identifier for each customer. The ID is the first five
	  letters of the Company name.
	
	  Note that Quit displays the following:
	
	  No Help topic is associated with this item.
	
	  The check box displays the Help topic for the Company. The other command
	  button displays the Help topic for the City.
	
	3. Now test all the objects on the toolbar. Click WhatsThisHelp on the form, and
	  click on each the toolbar button. The WhatsThisHelp topic for the form
	  (Customer ID) appears. The toolbar objects display whatever WhatsThisHelp
	  topic is set for the form.
	
	4. Try the workaround by clicking the simulated WhatsThisHelp button on the
	  toolbar. It has a "?" and a mouse pointer on it. Click on the Close button
	  (it is the button in the top-right corner with the "x" on it). There is no
	  WhatsThisHelp topic associated with this button. Next, click the simulated
	  WhatsThisHelp button, and click the button with the 4 on it. Be careful not
	  to let the mouse pointer move over the ToolButton with the 5 on it. Finally,
	  click the simulated WhatsThisHelp button and move the mouse pointer over the
	  ToolButton with the 5 on it. Notice that clicking on this button is not
	  necessary for the WhatsThisHelp topic to appear. The buttons have a 4 and a 5
	  on them because this is the WhatsThisHelpID assigned to them. The 5 is the
	  Address Help topic, the 4 is the Title Help topic. Note that these buttons
	  also have ToolTips and WAIT WINDOW commands in their click events.
	
	5. Note that when you click the simulated WhatsThisHelp button on the toolbar,
	  clicking on the form has no effect and resets the button. If you press the
	  ESC key and the simulated WhatsThisHelp button simultaneously, clicking on
	  the form also has no effect and resets the button. However, if you click on
	  either command button or the check box, the WhatsThisHelp topic appears.
	  These objects could also be set to behave in the same manner as the form when
	  you use the simulated WhatsThisHelp button on the toolbar. They were made to
	  function the same way under either the form's WhatsThisHelp button or the
	  button on the toolbar to illustrate that it was possible. Note that the
	  background of the check box does not refresh properly. This might be a
	  drawback.
	
	The Sample Code
	---------------
	
	The key code in the sample that enables you to call the proper WhatsThisHelp
	topic for the toolbar buttons is in either the MouseDown or MouseMove events for
	the toolbar buttons. The ToolButton with the caption of 5 has the code in the
	MouseMove. The ToolButton with the caption of 4 and the buttons on the form have
	the code in the MouseDown event. Placing the code in the MouseMove event is
	easier to implement, but it does not have the same functionality as the real
	WhatsThisHelp button. The code is as follows:
	
	     LPARAMETERS nButton, nShift, nXCoord, nYCoord
	     IF !This.Parent.Command4.Enabled AND nButton=1
	        This.Parent.WhatsThisHelpID=This.WhatsThisHelpID
	        This.Parent.ShowWhatsThis
	        This.Parent.Command4.Enabled=.T.
	     ELSE
	        IF nButton=1
	           This.Click
	        ENDIF
	     ENDIF
	
	You do not need the ELSE portion of the IF...ENDIF block if you are using the
	MouseMove event.
	
	When the user clicks the simulated WhatsThisHelp button on the toolbar, it is
	disabled. Then, when the user click the toolbar button, the MouseDown event
	fires, which checks to see if the simulated WhatsThisHelp button is disabled and
	if the user used the left mouse button. If so, the WhatsThisHelpID of the
	toolbar is set to the WhatsThisHelpID of the toolbar button that was clicked.
	Following this, the ShowWhatsThis method of the toolbar is called to display the
	WhatsThisHelpID that is assigned to the toolbar. The NODEFAULT keyword has been
	placed in the MouseUp event to prevent the ToolButton's click event from firing.
	Therefore, when you do not want the WhatThisHelp, the MouseDown has to call the
	click event. In the code above, this only happens if the user uses the left
	mouse button. This is not necessary when the WhatsThisHelp is called from the
	MouseMove event.
	
	Similar code is required in the MouseDown and MouseUp events of the objects on
	the form to allow them to work with the simulated WhatsThisHelp button on the
	toolbar.
	
	In addition, the WhatsThisHelp button on the form cancels if the user presses the
	ESC key. This has also been implemented in the simulated WhatsThisHelp button on
	the toolbar. To do this, the ESC key needs to be trapped on the form. In the
	click method of the simulated WhatsThisHelp button, the form's KeyPreview
	property is set to true(.T.). The following code is in the KeyPress event of the
	form:
	
	     IF !Thisformset.WhatsThisBar1.Command4.Enabled
	        NODEFAULT
	     ENDIF
	
	     IF nKeyCode=27
	        Thisformset.WhatsThisBar1.Command4.Enabled=.T.
	        This.KeyPreview=.F.
	     ENDIF
	
	This code checks to see if the user depressed the simulated WhatsThisHelp button
	on the toolbar. If so, default KeyPress actions are disabled with NODEFAULT.
	Note that you cannot press the SPACEBAR to fire the Quit button's click event
	and quit the form. Next, the nKeyCode is checked to see if the user pressed the
	ESC key. If so, the simulated WhatsThisHelp button is re-enabled and the form's
	KeyPreview property is set back to false(.F.).
	
	The Click event of the form has been programmed to behave differently if the user
	uses the simulated WhatsThisHelp button on the toolbar instead of the
	WhatsThisHelp button on the form. The following code is in the MouseDown event
	of the form to reset the simulated WhatsThisHelp button:
	
	     IF !This.parent.WhatsThisBar1.Command4.Enabled
	        This.parent.WhatsThisBar1.Command4.Enabled=.T.
	     ENDIF
	
	You could place this code in the MouseDown event of any of the objects on the
	form so that WhatsThisHelp would not be available to the objects if the user
	presses the simulated WhatsThisHelp button on the toolbar.
	
	The WhatsThisHelpIDs for the Help file topics are in the Whatthis.hpj file. You
	can open this file in Notepad or Visual FoxPro (MODIFY FILE whatthis.hpj). Look
	in the [MAP] section for the ID numbers.
	
	The following table lists all the objects in the formset and the settings for the
	WhatsThisHelpID:
	
	  Object                      WhatsThisHelpID
	  ------------------------------------------------------------------------
	  Form1                         1 - CustomerID
	  Command1                     -1 - nothing
	  Command2                      6 - City
	  Check1                        2 - Company
	  WhatsThisBar1                -1 - nothing
	  Command1(on toolbar)          4 - Title
	  Command2(on toolbar)          5 - Address
	  Command3(on toolbar)         -1 - nothing
	  Command4(on toolbar)         -1 - nothing, its the WhatsThisHelp button
	
	SYMPTOMS
	========
	
	The WhatsThisHelpID property of the command buttons on a toolbar is ignored when
	you use the WhatsThisHelp button on a form to get "What's This Help" for objects
	on the form.
	
	RESOLUTION
	==========
	
	To work around this, you can place a WhatsThisHelp button on the toolbar to
	provide "What's This Help" for the buttons on the toolbar. WTHelp.exe contains a
	sample form with a toolbar to illustrate this workaround.
	
	WTHelp.exe is a sample that demonstrates a workaround for the WhatsThisHelpID
	property of objects on a toolbar that are ignored when you use the WhatsThisHelp
	button on a form.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbOOP kbvfp500aBUG kbvfp600bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
