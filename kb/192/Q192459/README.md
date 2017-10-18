---
layout: page
title: "Q192459: INFO: VBCE Unsupported Controls, Properties, Methods, and Events"
permalink: kb/192/Q192459/
---

## Q192459: INFO: VBCE Unsupported Controls, Properties, Methods, and Events

	Article: Q192459
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500 kbVBp600 kbOSWinCEsearch kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides a list of controls, properties, methods, and events not
	supported in applications made with the Windows CE Toolkit for Visual Basic 6.0
	(VBCE).
	
	MORE INFORMATION
	================
	
	The Toolbox in the Visual Basic integrated design environment (IDE) displays the
	intrinsic controls built into Visual Basic and those added to individual
	projects.
	
	Some of the intrinsic controls are not supported in VBCE applications, but,
	because VBCE is an add-in, they cannot be removed from the Toolbox.
	
	The following intrinsic controls are usable in VBCE projects without any other
	action by the developer:
	
	- CheckBox
	- ComboBox
	- CommandButton
	- Frame
	- Label
	- Line
	- ListBox
	- OptionButton
	- Scrollbars (Horizontal and Vertical)
	- Shape
	- TextBox
	- Timer
	
	The following intrinsic controls in the default Toolbox are not directly
	supported by the Windows CE Toolkit for Visual Basic (VBCE alternatives are
	listed, where applicable):
	
	Regular VB control     CE equivalent      
	----------------------------------------     
	Data*                                      
	Directory List Box     CE File control    
	Drive List Box         CE File control    
	File List Box          CE File control    
	Image                  CE Image           
	OLE Container          none
	PictureBox             CE PictureBox      
	
	The following controls have Windows CE versions that can be added to VBCE
	projects:
	
	Regular VB control     CE equivalent      
	----------------------------------------  
	Grid                   CE Grid            
	MSComm32               CE Comm            
	TabStrip               CE TabStrip        
	TreeView               CE TreeView        
	Winsock                CE WinSock         
	
	Notes
	-----
	
	There is no VBCE control equivalent to the Data control. However, Microsoft has
	released the ActiveX Data Object SDK for Windows CE (ADOCE) which provides
	advanced database programmability for VBCE developers. You can download ADOCE
	from the Microsoft Download Center:
	
	  Msadoce2.exe
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q238947 FILE: Msadoce2.exe Installs ADO for Windows CE SDK
	
	General Notes
	-------------
	
	ActiveX Controls must added to the project using the Components dialog box.
	
	Attempting to add a control to a form not supported in Windows CE will generate
	an error message.
	
	Additionally, for the intrinsic controls that are supported in VBCE, there are
	some properties and methods that are not supported.
	
	The following table summarizes unsupported properties, methods, and events in
	Windows CE Toolkit for Visual Basic:
	+----------------------------------------------------------+
	| Properties        | Methods       | Events               | 
	+----------------------------------------------------------+
	| DataChanged       | Drag          | DragDrop             | 
	+----------------------------------------------------------+
	| DataField         | GetData       | DragOver             | 
	+----------------------------------------------------------+
	| DataSource        | OLEDrag       | GetFocus*%           | 
	+----------------------------------------------------------+
	| DisabledPicture   | PopupMenu     | KeyDown, KeyUp*%     | 
	+----------------------------------------------------------+
	| DownPicture       | SetData       | KeyPress*%           | 
	+----------------------------------------------------------+
	| DragIcon          | ShowWhatsThis | LinkClose            | 
	+----------------------------------------------------------+
	| DragMode          | WhatsThisMode | LinkError            | 
	+----------------------------------------------------------+
	| Enabled*          |               | LinkNotify           | 
	+----------------------------------------------------------+
	| HelpContextID     |               | LinkEvent            | 
	+----------------------------------------------------------+
	| Index             |               | LostFocus*%          | 
	+----------------------------------------------------------+
	| LastDLLError      |               | LogEvent             | 
	+----------------------------------------------------------+
	| LinkItem          |               | MouseDown, MouseUp*% | 
	+----------------------------------------------------------+
	| LinkMode          |               | MouseMove*%          | 
	+----------------------------------------------------------+
	| LinkTimeout       |               | OLECompleteDrag      | 
	+----------------------------------------------------------+
	| LinkTopic         |               | OLEDragDrop          | 
	+----------------------------------------------------------+
	| MaxButton         |               | OLEDragOver          | 
	+----------------------------------------------------------+
	| MinButton         |               | OLEGiveFeedBack      | 
	+----------------------------------------------------------+
	| MouseIcon         |               | OLESetData           | 
	+----------------------------------------------------------+
	| MousePointer      |               | OLEStartDrag         | 
	+----------------------------------------------------------+
	| OLEDrag           |               | StartLogging         | 
	+----------------------------------------------------------+
	| OLEDragMode       |               |                      | 
	+----------------------------------------------------------+
	| OLEDropMode       |               |                      | 
	+----------------------------------------------------------+
	| Picture           |               |                      | 
	+----------------------------------------------------------+
	| RightToLeft       |               |                      | 
	+----------------------------------------------------------+
	| SelText (ActiveX) |               |                      | 
	+----------------------------------------------------------+
	| Tag*              |               |                      | 
	+----------------------------------------------------------+
	| ToolTipText       |               |                      | 
	+----------------------------------------------------------+
	| WhatsThisHelp     |               |                      | 
	+----------------------------------------------------------+
	| WhatsThisHelpID   |               |                      | 
	+----------------------------------------------------------+
	
	* These properties and events are not supported for the TabStrip, ListView, and
	TreeView controls.
	% These properties and events are not supported for the Toolbar control.
	
	REFERENCES
	==========
	
	Windows CE Toolkit Help for Visual Basic 6.0
	
	Additional query words: wince vbce vbce6 wce
	
	======================================================================
	Keywords          : kbToolkit kbVBp500 kbVBp600 kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
