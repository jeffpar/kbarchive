---
layout: page
title: "Q183290: XFOR: Notes Client Gets Error Message: Error Loading Metafile"
permalink: /kb/183/Q183290/
---

## Q183290: XFOR: Notes Client Gets Error Message: Error Loading Metafile

	Article: Q183290
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5,8.03
	Operating System(s): 
	Keyword(s): kbusage kbFEA exc55sp2fea
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97, version 8.03, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 97, version 8.03, used with:
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	A Lotus Notes client (versions 4.5 and 4.6) may receive the following error
	message:
	
	  Error loading Metafile
	
	when you open a message sent from an Exchange client and delivered through either
	the Exchange Notes Connector (Exchange Server 5.5 - NMC) or the LinkAge Notes
	Connector (for Lotus Notes 3.2).
	
	NOTE: For additional diagnostic symptoms of this issue, see the following
	Microsoft Knowledge Base article:
	
	  Q179197 XFOR: Notes Client Receives "Error Loading Metafile"
	
	This problem can occur when all of the following statements are true:
	
	- The message is composed using the Exchange client or the Outlook client.
	
	- The message is composed using WordMail as the message editor.
	
	- The Exchange Server message composition includes a screen capture
	  (ALT+PRINTSCREEN or CTRL+PRINTSCREEN) pasted into (CTRL+V or by clicking
	  Paste from the Edit menu) the message body. (Additionally, On the Insert
	  menu, click Picture, then click From file[ASCII 133] can cause this same
	  result.)
	
	- The message is routed into Lotus Notes using the LinkAge Notes Connector (for
	  Lotus Notes 3.2) with Exchange Server 4.0 or 5.0, or using Exchange Server
	  5.5 and its Exchange Note Connector.
	
	CAUSE
	=====
	
	The Lotus Notes client's export\import filters do not properly convert inline
	bitmaps within a Rich Text Format (RTF) structure into a valid Composite Data
	structure.
	
	WORKAROUND
	==========
	
	A Visual Basic for Applications (VBA) macro can be employed within the Exchange
	client's enabling WordMail document template (Email.dot by default) to replace
	the default Edit and Paste behavior of WordMail. A code sample is provided
	below. Please read the MORE INFORMATION section and ALL the information about
	this macro before using it.
	
	WARNING: Microsoft provides programming examples for illustration only, without
	warranty either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose.
	
	This article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support engineers can help explain the functionality of a particular procedure,
	but they will not modify these examples to provide added functionality or
	construct procedures to meet your specific needs. If you have limited
	programming experience, you may want to contact the Microsoft fee-based
	consulting line at (800) 936-5200. For more information about the support
	options available from Microsoft, please see the following page on the World
	Wide Web:
	
	  http://support.microsoft.com/directory/
	
	The following macro changes the default behavior of the Edit and Paste
	functionality within any composition by using a document template (a Xxxxxxx.dot
	file) that has this macro added to it.
	
	It is recommended that you do the following:
	
	1. Edit an existing Email.dot template.
	
	2. Add the following VBA code as a macro named "EditPaste" (without the
	  quotation marks).
	
	3. Save the document template (possibly under a new name, for example,
	  Emailnmc.dot).
	
	4. Distribute the new template to Exchange clients that use WordMail.
	
	5. Configure the Exchange or Outlook clients to use the new document template
	  (see "Installing the template" below).
	
	     *** Begin VBA code ***
	
	      Sub EditPaste()
	      '
	      ' New Default EditPaste Command
	      ' Scripted 17/03/98 by David Ellis
	      On Error GoTo TIM
	      If Selection.Information(wdInWordMail) = 0 Then GoTo ZIG
	         Set myDialog = Dialogs(wdDialogEditPasteSpecial)
	         a$ = myDialog.Datatype
	         If a$ <> "DIB" Then GoTo ZIG
	         ' WordObject paste in progress
	         Application.ScreenUpdating = False
	         Selection.PasteSpecial Datatype:=wdPasteBitmap, Placement:=wdInLine
	         Selection.MoveLeft Unit:=wdCharacter, Count:=1
	         Selection.MoveRight Unit:=wdCharacter, Count:=2, Extend:=wdExtend
	         Selection.Cut
	         Selection.PasteSpecial Datatype:=wdPasteOLEObject,
	     Placement:=wdInLine
	         Selection.TypeParagraph
	         Selection.MoveRight Unit:=wdCharacter, Count:=1, Extend:=wdExtend
	         Selection.Copy
	         Selection.MoveLeft Unit:=wdCharacter, Count:=1
	         GoTo ZAG
	      TIM:
	      If Err = 4605 Then MsgBox "Unable to paste. Please copy the item and
	      try pasting again.", vbInformation, "Microsoft Outlook"
	      GoTo ZAG
	      MsgBox "Unable to paste. Please re-copy the item and paste again.",
	      vbInformation, "Microsoft Outlook"
	      GoTo ZAG
	      ZIG:
	         Selection.Paste
	      ZAG:
	         Application.ScreenUpdating = True
	      End Sub
	     *** End VBA code ***
	
	Using the Macro
	---------------
	
	The macro is engaged whenever the user clicks Paste from the Edit menu, or
	alternatively whenever the user uses the Paste toolbar button or the shortcut
	key combination CTRL+V. The macro's action remains transparent to the user.
	
	The macro is selective about when, and if, it changes existing Edit and Paste
	behavior. It only changes existing behavior if the data pasted is of datatype
	DIB (device independent bitmap). Word identifies desktop screen captures as
	DIBs. Images cut and pasted from other applications usually carry the
	application's or object's OLE identity with them, and Word treats them as OLE
	objects within the document or message composition.
	
	The macro results in the screen capture being included in the document or message
	as an OLE Word object instead of an inline bitmap within the RTF_Body. These
	Word objects traverse the Connector for Lotus Notes and can be successfully
	rendered within the Notes client.
	
	Issues with Using this Macro
	----------------------------
	
	There are two issues with using this macro:
	
	1. An OLE Word object tends to be somewhat larger than the inline bitmap of the
	  same screen capture. Although the difference is not excessive, the required
	  storage space, transfer time, and time for an Exchange client to display the
	  message may be greater than for a comparable RTF inline bitmap.
	
	2. After a screen capture is pasted into the message body, the clipboard buffer
	  is overwritten. If you intend to paste multiple copies of the SAME screen
	  capture into this message or additional messages, you must re-capture the
	  desired screenshot and paste it into the message. This is to prevent a
	  subsequent paste action from introducing an inline bitmap object that would
	  result in the message, once again, not being rendered in the Notes client.
	
	Installing the Template
	-----------------------
	
	Manual installation of a new template requires the following steps:
	
	1. Copy the new template file to the user's computer. The default location for
	  Email.dot is <install-drive>:\Program Files\Microsoft Office\Office. If
	  the new template is named Email.dot, and it is allowed to overwrite the
	  existing Email.dot, no further configuration is necessary besides restarting
	  the client.
	
	2. Configure the client to use the template: For Outlook, perform the following
	  steps:
	
	  a. On the Tools menu, click Options, then click the Email tab.
	
	  b. Click Template.
	
	  c. Locate and specify the template file to be used. Click Apply.
	
	  For Exchange Inbox:
	
	  a. On the Compose menu, click WordMail options...
	
	  b. Click Add.
	
	  c. Locate and specify the template file to be used. Click Add.
	
	  d. Select the new template from the list, and select the Set As Default
	     Template check box. Click Close.
	
	Automated installation:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	With automated methods for installing the template, for example, Microsoft
	Systems Management Server, you must place the file in the desired location and
	specify the full path and file name to the template in the following registry
	value:
	
	For Office 98:
	
	  HKEY_Current_User\Software\Microsoft\Office\8.0\Word\Stationary
	
	For Office 95:
	
	  HKEY_Current_User\Software\Microsoft\Office\7.0\Word\Stationary
	
	  Default Template:REG_SZ:<full-path-and-filename-to-document-template>
	
	RESOLUTION
	==========
	
	Microsoft has modified the Exchange Notes Connector to improve interoperability
	between Lotus Notes and Microsoft Exchange Server.
	
	To obtain this feature, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	This feature was first included in Exchange Server 5.5 Service Pack 2.
	
	
	
	STATUS
	======
	
	Lotus Notes is manufactured by Lotus, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	MORE INFORMATION
	================
	
	The WordMail default action for pasting screen captures into an e-mail
	composition is to paste the capture (recognized by WordMail as a device
	independent bitmap [DIB]) from the clipboard into the message body as an inline
	bitmap within the Rich Text Format (RTF) body of the composition. Inline bitmaps
	are fully supported by the current RTF specification, and RTF is a native
	document format of Microsoft Exchange Server.
	
	The Lotus Notes native document format is Composite Data (CD). The Lotus Notes
	client provides Export\Import filters (Nxrtf.dll and Nirtf.dll), which include
	transforms for converting RTF-to-CD and vice versa. The Exchange Notes Connector
	and the earlier LinkAge Notes Connector rely on the functionality available in
	these Notes DLLs for conversion of RTF-to-CD (Exchange message body converted
	from Exchange Server to Notes) and CD-to- RTF (Notes message body converted from
	Notes to Exchange Server). Lotus Development has not updated these conversion
	routines to support the current RTF specification, and the routines do not
	properly handle RTF structures with inline bitmaps within the RTF_Body. The
	result is that a message that cannot be rendered can be delivered to the Notes
	recipient.
	
	======================================================================
	Keywords          : kbusage kbFEA exc55sp2fea 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,5.5,8.03
	Issue type        : kbprb
	
	=============================================================================
	
