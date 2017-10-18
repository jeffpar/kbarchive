---
layout: page
title: "Q90485: Passing Ink Between Hedit Controls"
permalink: kb/090/Q90485/
---

## Q90485: Passing Ink Between Hedit Controls

	Article: Q90485
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly
	Last Modified: 25-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To pass ink between hedit controls, an application must capture the ink when the
	hedit control's parent window receives the HN_ENDREC notification message. Then
	the application does either of the following:
	
	- Sends a WM_HEDITCTL message with wParam set to HE_SETINKMODE to begin
	  collecting ink, and sends a WM_HEDITCTL message with wParam set to
	  HE_STOPINKMODE to stop collecting ink.
	
	- Specifies RCO_SAVEHPENDATA in the lRcOptions field of the RC data structure.
	
	INK2H is a file that demonstrates capturing ink and using the WM_HEDITCTL
	message.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Ink2h.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	The recognizer returns ink in the hpendata field of the RCRESULT structure.
	Passing ink between hedit controls is more difficult than using a normal device
	context (DC). Perform the following four steps to save the ink:
	
	1. Perform either of the following:
	
	  a. Specify RCO_SAVEHPENDATA in the lRcOptions field of the RC data structure.
	
	  b. Send the WM_HEDITCTL message to the hedit control with HE_SETINKMODE in
	     wParam to begin collecting ink. Send the WM_HEDITCTL message to the hedit
	     control with HE_STOPINKMODE to stop collecting ink.
	
	2. When the application receives an HN_ENDREC notification for the source hedit
	  control, retrieve the handle to the memory containing the ink. (When
	  recognition is complete, the recognizer sends a WM_COMMAND message with the
	  HN_ENDREC notification as the high-order word of lParam and the ID of the
	  hedit control in wParam.)
	
	3. Use the SendMessage function to send a WM_HEDITCTL message with
	  HE_GETINKHANDLE as the value for wParam. If the call is successful, the
	  low-order word of the returned value contains a handle to the memory
	  containing the ink.
	
	4. Depending on the choice made at step 1 above, perform the corresponding
	  step:
	
	  a. If the RCO_SAVEHPENDATA flag was set in step 1, Windows will not delete
	     the data after all corresponding WM_RCRESULT messages have been sent.
	     Therefore, call the DestroyPenData function to delete the pen data when an
	     HN_RCRESULT notification is received.
	
	  b. If HE_SETINKMODE is used, call the DuplicatePenData function to save the
	     ink into a block of memory allocated by the GlobalAlloc function.
	
	The procedure to place the collected ink into another hedit control is very
	similar. Send a WM_HEDITCTL message with wParam set to HE_SETINKMODE and the
	low-order of lParam set to the handle to the memory block containing the ink.
	Then send a WM_HEDITCTL message with wParam set to HE_STOPINKMODE.
	
	The INK2H sample application demonstrates copying ink between hedit controls
	using the HE_SETINKMODE and HE_STOPINKMODE values with a WM_HEDITCTL message.
	
	Additional query words: softlib INK2H.EXE kbfile
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly 
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	
	=============================================================================
	
