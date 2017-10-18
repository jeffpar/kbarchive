---
layout: page
title: "Q130728: OLE Controls Available in Visual FoxPro"
permalink: kb/130/Q130728/
---

## Q130728: OLE Controls Available in Visual FoxPro

	Article: Q130728
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbcode kbvfp300
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Professional Edition of Visual FoxPro has up to four OLE controls available
	in .OCX files depending on which Windows platform is being use. This article
	describes each of those controls and gives tips for using them. OLE controls
	covered are:
	
	 - MSCOMM32.OCX for communications
	 - MSMAPI32.OCX for MAPI (Messaging Application Program Interface)
	 - MSOUTL32.OCX for outlining
	 - PICCLP32.OCX for picture clip
	
	This article summarizes information available as many smaller help topics about
	OLE controls in the Visual FoxPro Professional Reference Help file.
	
	MORE INFORMATION
	================
	
	OLE Controls Overview
	---------------------
	
	The Visual FoxPro OLE Container control lets you add OLE controls (.OCX files) to
	your applications. Depending on your Windows platform (Windows version 3.1,
	Windows for Workgroups, Windows NT, or Windows 95) up to four OLE controls are
	installed with Visual FoxPro in your WINDOWS\SYSTEM directory.
	
	Event, Method, or Property May Apply to OLE Container (Form) or OLE Control
	---------------------------------------------------------------------------
	
	It's important to note that many events, methods, and properties that need to be
	set for OLE controls apply to the OLE Container control in which the OLE control
	is placed rather than directly to the OLE control itself. Others apply directly
	to the control.
	
	For example, the MAPI DownLoadMail property applies directly the MAPI OLE
	control, but the MAPI DocumentFile property applies to the container that the
	MAPI OLE object is in. Therefore, these properties for the MAPI OLE control are
	referenced in this manner:
	
	 SomeForm.DocumentFile
	 SomeMAPIControl.DownLoadMail
	
	Code Sample for OLE Control
	---------------------------
	
	The following code sample shows how an OLE container can be added to a form and
	used to modify a Microsoft Excel file from Visual FoxPro:
	
	  * The following example adds an OLE Container control to a form, and uses
	  * the OleClass and DocumentFile properties to specify Microsoft Excel as
	  * the OLE server and a Microsoft Excel worksheet as the file to edit.
	  *
	  * The DocumentFile property specifies a worksheet named BOOK1.XLS in
	  * the EXCEL directory on drive C. This example will not work if
	  * the file and directory specified in the DocumentFile property do not
	  * exist; It may be necessary to modify the DocumentFile property to
	  * specify an existing directory and worksheet file.
	  *
	  * The DoVerb method is used to activate the worksheet for editing.
	
	  frmMyForm = CREATEOBJECT('Form')  && Create a Form
	  frmMyForm.Closable = .F. && Disable the Control menu box
	
	  frmMyForm.AddObject('cmdCommand1','cmdMyCmdBtn')  && Add command button
	  frmMyForm.AddObject("oleObject","oleExcelObject")  && Add OLE object
	
	  frmMyForm.cmdCommand1.Visible=.T. && Display the Quit command button
	
	  frmMyForm.oleObject.Visible=.T. && Display the OLE control
	  frmMyForm.oleObject.Height = 50  && Specify OLE control height
	
	  frmMyForm.Show  && Display the Form
	
	  frmMyForm.oleObject.DoVerb(-1)  && -1 for Edit
	
	  READ EVENTS  && Start event processing
	
	  DEFINE CLASS oleExcelObject as OLEControl
	    OleClass ="Excel.Sheet"  && Server name
	    DocumentFile = "C:\EXCEL\BOOK1.XLS"  && This file must exist
	  ENDDEFINE
	
	  DEFINE CLASS cmdMyCmdBtn AS CommandButton  && Create command button
	    Caption = '\<Quit'  && Caption on the command button
	    Cancel = .T. && Default Cancel command button (Esc)
	    Left = 125  && Specify command button column
	    Top = 210  && Specify command button row
	    Height = 25  && Specify command button height
	
	    PROCEDURE Click
	      CLEAR EVENTS  && Stop event processing and close form
	
	  ENDDEFINE
	
	  * End of Sample Code for OLE Control.
	
	Communications Control (MSCOMM32.OCX)
	-------------------------------------
	
	The Communications control, MSCOMM32.OCX, provides serial communications for your
	application by allowing the transmission and reception of data through a serial
	port. The Communications control is installed only if you are running Windows NT
	or Windows 95.
	
	  Syntax: MSComm
	
	The Communications control provides the following two ways to handle
	communications:
	
	- Use event-driven communications to handle serial port interactions. In many
	  situations, you want to be notified the moment an event takes place, such as
	  when a character arrives or a change occurs in the Carrier Detect (CD) or
	  Request To Send (RTS) lines. In such cases, you can use the Communications
	  control's OnComm event to trap and handle these communication events. The
	  OnComm event also detects and handles communications errors.
	
	  -or-
	
	- Poll for events and errors by checking the value of the CommEvent property
	  after each critical function of your program. This may be the best method if
	  your application is small and self-contained. For example, if you are writing
	  a simple phone dialer, it may not make sense to generate an event after
	  receiving every character, because the only characters you plan to receive
	  are the OK response from the modem.
	
	Each Communications control you use corresponds to one serial port. If you need
	to access more than one serial port in your application, you must use more than
	one Communications control. The port address and interrupt address can be
	changed from the Windows Control Panel.
	
	When you create and distribute applications that use the Communications control,
	you should install MSCOMM32.OCX in the customer's WINDOWS\SYSTEM subdirectory.
	
	The following example, from the Visual FoxPro Help file, shows how to perform
	basic serial port communications:
	
	     * Use COM1.
	     Comm1.CommPort = 1
	     * 9600 baud, no parity, 8 data, and 1 stop bit.
	     Comm1.Settings = "9600,N,8,1"
	     * Tell the control to read entire buffer when Input is used.
	     Comm1.InputLen = 0
	     * Open the port.
	     Comm1.PortOpen = .T.
	     * Send the attention command to the modem.
	     Comm1.Output = "AT" + CHR(13)
	     * Wait for data to come back to the serial port.
	     DO WHILE Comm1.InBufferCount <= 2
	       * Read the "OK" response data in the serial port.
	       InString = Comm1.Input
	     ENDDO
	     * Close the serial port.
	     Comm1.PortOpen = .F.
	
	MAPI Control (MSMAPI32.OCX)
	---------------------------
	
	The messaging application program interface (MAPI) control, MSMAPI32.OCX, allows
	you to create a mail-enabled Visual FoxPro application. The MAPI controls are
	installed only if you are running Windows NT or Windows 95.
	
	The MAPI controls are invisible at run time. In addition, there are no events for
	the controls. To use them, you must specify the appropriate methods. For these
	controls to work, MAPI services must be present. MAPI services are provided in
	Microsoft Mail electronic mail system for Microsoft Windows, version 3.0 or
	later.
	
	MAPI Session and MAPI Messages OLE Controls
	-------------------------------------------
	
	There are two OLE controls (MAPI Session and MAPI Messages) you can create with
	MSMAPI32.OCX. The MAPI Session control establishes a MAPI session, and the MAPI
	Messages control allows the user to perform a variety of messaging system
	functions.
	
	MAPI Session Control
	--------------------
	
	The MAPI Session control signs on and establishes a MAPI session, and it signs
	off from a MAPI session.
	
	  Syntax: MapiSession
	
	After a sign-on is successful, the SessionID property contains the handle to the
	MAPI session. The session handle must then be passed to the MAPI Messages
	control or an error results when using the MAPI Messages control. Be sure to use
	the MAPI Session control to sign off from any messaging session you initiate
	with a sign-on action.
	
	MAPI Messages Control
	---------------------
	
	After a messaging session is established by using the MAPI Session control, the
	MAPI Messages control performs a variety of messaging system functions.
	
	  Syntax: MapiMessages
	
	With the MAPI Messages control, you can:
	
	- Access messages currently in the inbox.
	
	- Compose a new message.
	
	- Add and delete message recipients and attachments.
	
	- Send messages, with or without a supporting user interface.
	
	- Save, copy, and delete messages.
	
	- Display the Address Book dialog box.
	
	- Display the Details dialog box.
	
	- Access attachments, including OLE automation attachments.
	
	- Resolve a recipient name during addressing.
	
	- Perform reply, reply-all, and forward actions on messages.
	
	Most of the properties of the MAPI Messages control can be categorized into four
	functional areas: address book, file attachment, message, and recipient
	properties. The file attachment, message, and recipient properties are
	controlled by the AttachmentIndex, MsgIndex, and RecipIndex properties,
	respectively.
	
	For example, as the index value changes in the MsgIndex property, all other
	messages, file attachments, and recipient properties change to reflect the
	characteristics of the specified message. The set of message and recipient
	properties works the same way. The address book properties specify the
	appearance of the Address Book dialog box.
	
	When using the MAPI Messages control, you need to keep track of two buffers, the
	read buffer and the compose buffer.
	
	The read buffer is made up of an indexed set of messages fetched from a user's
	inbox. The MsgIndex property is used to access individual messages within this
	set, starting with a value of 0 for the first message and incrementing by one
	for each message through the end of the set. The message set is built using the
	Fetch method.
	
	The set includes all messages of type FetchMsgType and is sorted as specified by
	the FetchSorted property. Previously read messages can be included or left out
	of the message set with the FetchUnreadOnly property. Messages in the read
	buffer can't be altered by the user, but can be copied to the compose buffer for
	alteration.
	
	Messages can be created or edited in the compose buffer. The compose buffer is
	the active buffer when the MsgIndex property is set to - 1. Many of the
	messaging actions are valid only within the compose buffer, such as sending
	messages, sending messages with a dialog box, saving messages, or deleting
	recipients and attachments.
	
	Outline Control (MSOUTL32.OCX)
	------------------------------
	
	The Outline control, MSOUTL32.OCX, is a special type of list box that allows you
	to display items in a list hierarchically. This is useful for showing
	directories and files in a file system, which is the technique used by the
	Windows File Manager.
	
	  Syntax: Outline
	
	Each item in the Outline control can have subordinate items, which are visually
	represented by indentation levels. When an item is expanded, its subordinate
	items are visible; when an item is collapsed, its subordinate items are hidden.
	Items in the Outline control can also display graphical elements to provide
	visual cues about the state of the item.
	
	Visual Elements of Outline Control
	----------------------------------
	
	The Outline control can display graphics and text for each item in a list. For
	examples that use plus/minus pictures and text or examples that use tree lines,
	type pictures, and text, please see the Visual FoxPro Help file.
	
	An item in an outline can have each of the following graphical elements:
	
	- Tree lines: Vertical and horizontal lines that link items with subordinate
	  items. A tree line generates Expand and Collapse events.
	
	- Indentation: An item's level of subordination. Each level of indentation is a
	  level of subordination you specify with the Indent property.
	
	- Plus/minus sign: Indicates whether subordinate items are visible or hidden.
	  When the plus sign is clicked, subordinate items become visible and a minus
	  sign replaces the plus sign. When the minus sign is clicked, the subordinate
	  items are hidden and a plus sign replaces the minus sign.
	
	- Type pictures: Indicates the state of an item. Type pictures typically show
	  whether an item with subordinate items can be expanded or collapsed. For
	  example, a picture of a closed folder indicates that items in the folder can
	  be expanded. The state of an item is user- defined. The type picture
	  generates PictureClick and PictureDblClick events.
	
	- Text: The string displayed for an item. Each graphical element can be a
	  hot-spot graphic. Clicking a hot spot triggers a special set of events. Use
	  the Style property to display all, some, or none of the graphical elements
	  for each item in the Outline control.
	
	NOTE: You can't select an item by clicking a graphical element in the Outline
	control. To select an item in an Outline Control, you must click or double-click
	the text.
	
	You can use the keyboard to select items in an Outline control's list. The
	following table lists the keys and their actions.
	
	Keyboard Key   Action
	-------------------------------------------------------------------------
	
	LEFT ARROW     Moves the focus to the parent item, if the current item is
	              subordinate.
	
	RIGHT ARROW    Moves the focus to the first subordinate item, if visible.
	
	UP ARROW       Moves the focus to the previous item, if any.
	
	DOWN ARROW     Moves the focus to the next item, if any.
	
	HOME           Moves the focus to the first item in the list.
	
	END            Moves the focus to the last item that is visible.
	
	PAGE UP        Moves the focus back one page, or to the first item
	              currently displayed.
	
	PAGE DOWN      Moves the focus forward one page, or to the last item
	              currently displayed.
	
	PLUS (+)       Expand an item that has subordinate items.
	
	MINUS (-)      Collapse an item that has subordinate items.
	
	Step-by-Step Process to display Outline Control Properties Dialog Box
	---------------------------------------------------------------------
	
	1. Create a form or open an existing one in the Form Designer.
	
	2. From the Form Controls toolbox, choose the OLE Container Control button and
	  place an OLE container control on the form.
	
	  The Insert Object dialog box appears.
	
	3. In the Insert Object dialog box, choose Insert Control.
	
	4. From the Control Type list, select Outline Control.
	
	5. Choose OK.
	
	  The Outline control appears on the form.
	
	6. With the mouse, right-click the Outline control to display the shortcut menu.
	
	7. From the shortcut menu, choose Properties.
	
	  The Outline Control Properties dialog box appears.
	
	Outline Control Properties Tabs
	-------------------------------
	
	Outline Control Properties tabs that specify style properties and general
	characteristics of the Outline control are:
	
	- Pictures: Specifies picture properties for the Outline control.
	
	- Fonts: Specifies the font, font style, font size, and other properties for
	  the Outline control.
	
	- Colors: Specifies background and foreground colors for the Outline control.
	
	Picture Clip Control (PICCLP32.OCX)
	-----------------------------------
	
	The Picture Clip control, PICCLP32.OCX, allows you to select an area of a source
	bitmap, and then display the image of that area in a form. Picture Clip controls
	are invisible at run time.
	
	  Syntax: PictureClip
	
	The Picture Clip control provides an efficient mechanism for storing multiple
	picture resources. Instead of using multiple bitmaps or icons, create a source
	bitmap that contains all the images required by OLE controls in your
	application. When you need to access an individual image, use the Picture Clip
	control to select the region in the source bitmap that contains that image.
	
	For example, you could use this control to store all the images needed for your
	application. It is much more efficient to store all of the images in a single
	Picture Clip control than it is to store each image as a separate file. To do
	this, you first need to create a source bitmap that contains all of the images.
	
	The picture object reference the Picture Clip control creates from the source
	bitmap can only be used by other OLE controls. For example, it can be used for
	the PictureOpen and PictureClosed properties in the Outline control. Visual
	FoxPro controls and objects cannot use the picture object reference the Picture
	Clip control creates.
	
	You can use the Random Access method or the Enumerated Access method to specify
	the clipping region in the source bitmap as follows:
	
	- Use the Random Access method to select any portion of the source bitmap as
	  the clipping region. Specify the upper-left corner of the clipping region by
	  using the ClipX and ClipY properties. The ClipHeight and ClipWidth properties
	  determine the area of the clipping region. This method is useful when you
	  want to view a portion of a bitmap.
	
	  -or-
	
	- Use the Enumerated Access method to divide the source bitmap into a specified
	  number of rows and columns. The result is a uniform matrix of picture cells
	  numbered 0, 1, 2, and so on. You can access individual cells by using the
	  GraphicCell property. This method is useful when the source bitmap contains a
	  palette of images that you want to access individually.
	
	To load the source bitmap into the Picture Clip control, use the Picture
	property. You can only load bitmap (.BMP) files into the Picture Clip control.
	
	NOTE: When you create and distribute applications that use the Picture Clip
	control, you should install PICCLP32.OCX in the user's Microsoft WINDOWS\SYSTEM
	subdirectory.
	
	PicClip Control Properties Dialog Box
	-------------------------------------
	
	The PicClip Control Properties dialog box specifies properties for the PicClip
	control, which is an OLE container control that allows you to select an area of
	a source bitmap and display that area in a form. To display the PicClip Control
	Properties dialog box, follow these steps:
	
	1. Create a form or class, or open an existing form or class in the Form
	  Designer.
	
	2. From the Form Controls toolbox, choose the OLE Container Control button and
	  place an OLE container control on the form. The Insert Object dialog box
	  appears.
	
	3. In the Insert Object dialog box, choose Insert Control.
	
	4. From the Control Type list, select PicClip Control.
	
	5. Choose OK. The PicClip control appears on the form.
	
	6. With the mouse, right-click the PicClip control to display the shortcut menu.
	
	7. From the shortcut menu, choose Properties. The PicClip Control Properties
	  dialog box appears.
	
	PicClip Control Properties Tabs
	-------------------------------
	
	The PicClip Control Properties tabs are:
	
	- Rows/Cols: Specifies the number of rows and columns in the PicClip control.
	
	- Pictures: Specifies a picture for the PicClip control.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode kbvfp300 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : :3.0
	
	=============================================================================
	
