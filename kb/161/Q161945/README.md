---
layout: page
title: "Q161945: XCON: MSMail Shows Blank Icon for File Attachments from Internet"
permalink: /kb/161/Q161945/
---

## Q161945: XCON: MSMail Shows Blank Icon for File Attachments from Internet

	Article: Q161945
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Mail client or the Microsoft Exchange Client
	connected to a Microsoft Mail postoffice, file attachments included in messages
	from Internet users contain blank icons. This is true even for icons that are
	associated with programs on the local computer. The document does open correctly
	when it is clicked, if an associated program exists for the attachment.
	
	For example, your Microsoft Mail client shows a blank icon for an attached
	Microsoft Word document, even though you have Word installed. Double- clicking
	the blank icon starts Word (if it is not already started), and the document
	opens correctly in Word.
	
	CAUSE
	=====
	
	Microsoft Mail clients display icon images according to the following
	algorithms:
	
	Winmail.dat File Does Not Exist
	-------------------------------
	
	If an e-mail message has an attachment, and no Winmail.dat file, the mail client
	will display an icon for the file if an association for the file extension has
	been established. The Winmail.dat file is a special file created by Microsoft
	Mail clients that contains MAPI property information, rich-text formatting, icon
	images, and other non-text related items.
	
	Winmail.dat File Does Exist
	---------------------------
	
	If an e-mail message has an attachment and a Winmail.dat file, the mail client
	will display the icon image present in the Winmail.dat file. The Winmail.dat
	file always contains an icon image for each attachment.
	
	When mail from the Internet Mail Connector (IMC) is passed to the Microsoft Mail
	Connector interchange (MSMI), the MSMI always projects a Winmail.dat file for
	any message that contains an attachment. Because the original message received
	by the MSMI may not contain an icon image (if it originated from a client other
	than Microsoft Mail), the MSMI inserts a blank icon image into the Winmail.dat
	file.
	
	Because the Microsoft Mail client sees a Winmail.dat file (created by the MSMI),
	it expects an icon image to be present.
	
	WORKAROUND
	==========
	
	Use either of the following methods:
	
	Method 1: Migrate Users
	-----------------------
	
	Migrate users to the Microsoft Exchange Client using Microsoft Exchange Server as
	their message store. In this standard configuration, Microsoft Exchange clients
	will display an icon if present from the sender. If no icon is present, the
	client will display an icon associated with the file based on its associations.
	
	Method 2: Use the Fix Described
	-------------------------------
	
	The Status section of this article describes a fix that is available from
	Microsoft Technical Support.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange versions 4.0
	and 5.0. This problem was corrected in the latest Microsoft Exchange Server 4.0
	and 5.0 U.S. Service Packs. For information on obtaining the service pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	To operate, the fix requires that the Microsoft Exchange Server computer that is
	running the Microsoft Mail Connector interchange (MSMI) must be running
	Microsoft Windows NT 4.0. In addition, the fix works by allowing the MSMI to
	provide an icon image for documents (instead of using a blank icon image). For
	the fix to work, the applications for the documents that are received as blank
	icons must be installed on the Microsoft Exchange Server computer with the fix.
	(That is, you must install Microsoft Word for Windows on the Microsoft Exchange
	server, if .doc files are received with blank icons.)
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	- To activate the fix, you must add a value to the registry:
	
	  Edit the registry key as follows:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	        \MSExchangeMSMI\Parameters
	
	  Add the following registry value (type of DWORD set to 1):
	
	     Search for icon on server
	
	If this registry entry is present and the value is set to 1, the MSMI will search
	the Windows NT registry of the server that it is running on to locate an
	executable file that contains the icon for the associated extension of the
	attachment file name.
	
	If this registry entry is not present, the default value is FALSE or 0. In this
	case, the MSMI will use the default icon for attachments in a message that do
	not already have an icon image. This is normal behavior of the MSMI.
	
	
	For additional information about Winmail.dat, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q136204 XCLN: Sending Messages in Rich-Text Format
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
