---
layout: page
title: "Q99797: Simple Training Techniques for a Recognizer"
permalink: kb/099/Q99797/
---

## Q99797: Simple Training Techniques for a Recognizer

	Article: Q99797
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbfile kbDSupport
	Last Modified: 10-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information concerns the Microsoft Windows for Pen Computing
	sample Training Emulator, version 1 (TrainInk).
	
	There is a sample called TRAINEM in the Microsoft Download Center. This Windows
	for Pen Computing sample demonstrates how to do simple training on a trainable
	handwriting recognizer. The sample utilizes the TrainInk application programming
	interface (API) to do the training.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Trainem.exe
	  (http://download.microsoft.com/download/platformsdk/sample77/3.1/W31/EN-US/Trainem.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Trainem.exe is a Windows for Pen Computing version 1.0 sample, which can be run
	on any Windows version 3.1 or Windows for Workgroups machine that has the Pen
	Extensions installed [from the Microsoft Windows 3.1 Software Development Kit
	(SDK) or Visual C++ Development Kit.]
	
	On a system that is running only the Pen Extensions and not the full Windows for
	Pen Computing environment, the virtual keyboard executable may not be present
	(SKB.EXE on U.S. systems) such that the ShowKeyboard call cannot bring up the
	virtual keyboard. In this case, when the Keyboard button is pressed, a dialog
	box will be displayed informing the user that the virtual keyboard could not be
	started.
	
	Trainem.exe demonstrates one of the training APIs used in training handwriting in
	a recognizer. The TrainInk API is the simpler of the two training APIs
	available; however, using it requires knowledge of recognizers and what they are
	capable of doing. Therefore, Trainem.exe also demonstrates querying a recognizer
	to determine whether it is capable of being trained; if so, the sample
	demonstrates the limitations of that training.
	
	Trainem.exe also demonstrates one method of capturing ink for training, and
	displays an interface that a user can use to view that ink and train it to the
	correct value. Note that during this process, ink can be captured and saved from
	an hedit or bedit control, and textual information can be retrieved with
	ordinary window messages.
	
	As written, Trainem.exe requires the Microsoft default recognizer, also known as
	the Roman recognizer, MARS. Note that the ConfigRecognizer call is resident in
	the recognizer code itself and must be imported explicitly in the .DEF file. In
	the more general case, not dealt with in this sample, an application could
	install the recognizer at run time or query for the current recognizer and
	obtain a pointer to the needed function. This sample uses the more direct and
	easier method, though not necessarily the most robust method.
	
	The sample also requires that some action be taken after a recognition session
	has taken place in the main hedit control on the main window. The user must
	choose either the Reset Hedit button or the Train button before further
	recognition sessions are allowed in the control. The control is disabled until
	training has taken place or until the control is reset.
	
	This method was used to avoid losing track of the correct ink to train in the
	hedit control. More sophisticated training programs might explore algorithms
	that allow for tracking multiple recognition sessions, and bring up the
	appropriate result and original ink on request for training. This sample is a
	simple demonstration of the basics required for training a recognizer; more
	sophisticated algorithms for handling multiple recognition sessions are beyond
	its scope.
	
	Additional query words: TRAINEM
	
	======================================================================
	Keywords          : kbfile kbDSupport 
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	
	=============================================================================
	
