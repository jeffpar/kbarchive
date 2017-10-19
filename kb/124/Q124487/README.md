---
layout: page
title: "Q124487: PC Adm: How to Strand Attachment if It's too Large for System"
permalink: /kb/124/Q124487/
---

## Q124487: PC Adm: How to Strand Attachment if It's too Large for System

	Article: Q124487
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes a user will try to send a very large mail message (or a message with a
	large attachment) from Microsoft Mail for Windows. This can cause some network
	servers to run out of disk space or it can drastically slow network performance.
	
	MORE INFORMATION
	================
	
	Only one copy of the message and attachment is kept on the postoffice (in the
	MAILDATA directory). When a message is sent to a user, a record goes into that
	user's mailbag (.MBG) file. The .MBG file in turn points to the message (.MAI)
	file on the postoffice. If there is an attachment, it is contained in an .ATT
	file, and the .MAI file contains a pointer that points to the .ATT file. Once
	the user reads his or her mail from the Windows client, all the messages and
	attachments get moved from the user's .MBG file into his or her personal Mail
	message file (.MMF).
	
	RESOLUTION
	==========
	
	If any users have not yet read mail containing the large attachment, a Mail
	administrator can prevent those users from reading the message by "stranding"
	the .ATT file on the postoffice. This procedure will remove the pointer to the
	.ATT file, so that Mail will not be able to download it to those users' .MMF
	files.
	
	To prevent the mail message or attachment from interfering with any users who
	have not yet viewed the message from Microsoft Mail for Windows:
	
	1. Find a user who has not viewed this message in Microsoft Mail for Windows.
	
	2. Log in as that user from the MS-DOS workstation.
	
	  Make a note of the message text that is listed under the subject of the mail
	  message with the large attachment.
	
	3. Use the LISTUSER.EXE utility to get the hexadecimal ID (hexid) number of that
	  user's .MBG file.
	
	4. Use DEBUG.EXE on the .MBG file and look for the message text from the subject
	  line noted in step 2. From the C:\MAILDATA\MBG directory, type the
	  following:
	
	  "debug 00000003.mbg" (without the quotation marks)
	
	  This command will return a hyphen (-) sign. Type the following and then press
	  ENTER.
	
	  "d" (without the quotation marks)
	
	  Keep typing "d" (without the quotation marks) until you see the message text.
	  After the message text you will see an eight-digit hexadecimal number. This
	  is the number of the .MAI file that points to the .ATT file. Type the
	  following to exit DEBUG, and then press ENTER:
	
	  "q" (without the quotation marks)
	
	5. Go to the MAILDATA\MAI subdirectory. There are 16 subdirectories in the
	  MAILDATA\MAI directory. The hexadecimal number you obtained in step 4
	  corresponds to a <hexid>.MAI file in one of the 16 subdirectories. For
	  example, If the hexid number is 00000017, look in the MA7 subdirectory for
	  00000017.MAI. You can use Windows File Manager to search the MA*
	  subdirectories for the location of the 00000017.MAI file.
	
	6. Rename the 00000017.MAI file to some other name, such as BADMSG.OLD.
	
	7. Have the user log in to the Windows client. From the View menu, choose New
	  Messages. Double-click the message. The message will display the following
	  error:
	
	  ==== MAIL SYSTEM ERROR ====
	  Mail could not read the entire message from the postoffice.
	  Some parts of the message may be missing. Ask the sender
	  to resend the message.
	
	  This error is expected. Anyone who has not yet read the offending message will
	  receive this error, which means that the large attachment will no longer be
	  circulating around the system.
	
	NOTE: You can use the External Mail program MaxLanMailSize option to restrict the
	sizes of messages users can send to an external postoffice on the same LAN. For
	more information about how to use the MaxLanMailSize option, please see page 252
	of the Microsoft Mail "Administrator's Guide."
	
	For more information about the LISTUSER.EXE utility, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q99419 PC DB: Database Maintenance Utilities (Complete)
	
	
	Additional query words: 3.00 3.20 attachment orphan large
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	
