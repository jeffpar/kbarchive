---
layout: page
title: "Q103375: MultiDlg.exe Demonstrates Dynamic Child Dialog Boxes"
permalink: /kb/103/Q103375/
---

## Q103375: MultiDlg.exe Demonstrates Dynamic Child Dialog Boxes

{% raw %}

	Article: Q103375
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbDlg kbSDKPlatform
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual C++ Project Compiler and Project Linker dialog boxes, and the Word
	for Windows version 2.0 Options dialog box, demonstrate dynamic child
	dialogs--dialogs boxes within dialogs boxes, which dynamically appear based on a
	list box selection. This article discusses how to implement these dynamic child
	dialog boxes. MultiDlg.exe is a file in the Microsoft Software Library that
	demonstrates one of the techniques discussed in this article.
	
	The style to use is WS_EX_CONTROLPARENT.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	MultiDlg.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	A dynamic child dialog box generally contains a list box at the left, which
	determines what subdialog box is displayed in the right side of the dialog box.
	This interface structure is helpful when managing very large interfaces with
	options that intuitively break into categories. The Word for Windows Options
	dialog box and Visual C++'s Compiler and Linker dialog boxes are good examples
	of complex interfaces made manageable by the use of dynamic child dialog boxes.
	
	Possible implementations for dynamic child dialog boxes can be divided into two
	categories. One approach--often the first one to come to mind--involves
	embedding a dialog box, which has the WS_CHILD style, into a second, larger
	dialog box. At first, this approach's modularity appears to be big plus; that
	is, because the child dialog boxes are actual dialog boxes, each one gets its
	own dialog box procedure and resource script definition. There is a major
	problem in this approach, however, in that limitations of IsDialogMessage()
	prevent it from operating on windows whose controls extend more than one level
	deep. Because the controls on the WS_CHILD dialog boxes are children of a child
	of the main dialog box, simply adding IsDialogMessage() with the main dialog
	box's handle to the message loop won't cover mnemonic, tabbing, and other dialog
	box functionality for these controls. Working around these problems can be
	difficult.
	
	The second approach does not use a true WS_CHILD dialog box. Instead, it
	conditionally creates and destroys (and/or hides and shows) groups of controls
	on a single dialog box, based on the list box selection. This approach does not
	suffer from the tabbing and mnemonic problems of the WS_CHILD dialog approach.
	Additionally, with some cleverness, both the code and the resource script can be
	as modular as the WS_CHILD dialog box approach.
	
	Developers should be aware of the stress dynamic dialog boxes can place on USER's
	heap space. Each control created consumes some of this, and a normal Windows
	dialog box may consume as much as 3 percent or more of this shared system
	resource. However, a dynamic child dialog box creates many more controls
	compared to a normal dialog box. Most of these controls are hidden at any one
	time, and are made visible only when their particular child dialog box is shown.
	While they may be hidden, they consume just as much USER heap, and therefore
	it's easy to imagine how a complex dynamic child dialog box could use 15 percent
	or more of the available USER heap space.
	
	Obviously, the developer must beware of consuming so much of a scarce system
	resource. To address this concern, MULTIDLG creates the controls of a particular
	dynamic child dialog box only if and when that dialog box needs to be displayed.
	If the user doesn't pick a particular list box option, the controls for that
	option aren't created. Note that MULTIDLG just hides created controls when
	another child dialog box is chosen. A more complex implementation of dynamic
	child dialog boxes should destroy inactive controls, to fully reclaim the USER
	heap space they consume. The down side of this is that the application is
	required to record the state of each control within a particular dynamic child
	dialog box before killing it, and to reset each control's state if the subdialog
	box is chosen again. In contrast, if the controls aren't killed when the dynamic
	child dialog box is deselected, the state information can be conveniently
	extracted from the controls themselves when the user chooses the OK command
	button, even though these controls are invisible.
	
	MULTIDLG implements dynamic child dialog boxes by loading and parsing dialog box
	resources and creating their controls manually on a larger, main dialog box.
	When another subdialog box is chosen, MULTIDLG hides all the controls of the
	existing dialog box before showing the new selection's controls (creating them
	from their template as well, if necessary).
	
	MULTIDLG uses these steps to create the controls on the main dialog box:
	
	1. If the group of controls has not been loaded before, load the dialog box
	  resource in which they reside, via FindResource() and LoadResource().
	
	2. Parse the control information out of the dialog box resource using the
	  DialogBoxHeader and ControlData structures as guides. (These structures are
	  not defined in WINDOWS.H. Because they contain variable-length fields, they
	  can't really be represented as C structs. You can find information about
	  these structures in the Windows 3.1 SDK online documentation, under "Dialog
	  Box Resource".)
	
	3. Determine the coordinates of the controls within the main dialog box by
	  converting their dialog units into pixels, and call CreateWindow() on each.
	
	NOTE: A bug in IsDialogMessage() prevents mnemonics from working correctly when a
	hidden control shares a mnemonic with a visible control. To work around this,
	MULTIDLG captures the window text from appropriate controls as they are being
	hidden, and resets this window text to nothing. When the control is becoming
	visible again, the code resets the text to what it was. This prevents
	IsDialogMessage() from seeing the mnemonic of the hidden control.
	
	Additional query words: DialogBoxIndirect listbox
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbDlg kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
