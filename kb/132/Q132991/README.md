---
layout: page
title: "Q132991: Microsoft Fax for Windows 95 Questions and Answers"
permalink: kb/132/Q132991/
---

## Q132991: Microsoft Fax for Windows 95 Questions and Answers

	Article: Q132991
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains questions and answers about Microsoft Fax for Windows 95.
	
	MORE INFORMATION
	================
	
	1. Q. What fax/modems does Microsoft Fax support?
	
	  A. Microsoft Fax supports Class 1 and Class 2 fax/modems. Class 1 fax/modems
	  can send documents to each other in an editable (or e-mail) format. Class 2
	  fax/modems can send and receive faxes in facsimile format only.
	
	2. Q. Why does my CAS modem not work with Microsoft Fax?
	
	  A. CAS modems (such as the Intel SatisFAXtion 200i, Intel SatisFAXtion 400i,
	  and GammaLink CAS modem) are not supported in Microsoft Fax. A firmware
	  revision is available from Pure Data for the Intel SatisFAXtion 400i CAS
	  modem to make it Class 1 compatible. For information about whether your modem
	  can be made Class 1 compatible, please contact your modem manufacturer.
	
	3. Q. Why does Microsoft Fax indicate that it is going offline when I use The
	  Microsoft Network?
	
	  A. This occurs because you have selected both Microsoft Fax and The Microsoft
	  Network services in your Microsoft Exchange profile. When you launch
	  electronic mail services using The Microsoft Network, Microsoft Exchange
	  attempts to load all the installed providers, causing Microsoft Fax to be
	  loaded as well. Microsoft Fax cannot initialize the communications port
	  because The Microsoft Network is already connected. When you disconnect from
	  The Microsoft Network, Microsoft Fax can go online automatically.
	
	4. Q. I upgraded my shared Windows for Workgroups At Work Fax server to the
	  Windows 95 network fax server and now I cannot connect to it using a Windows
	  for Workgroups At Work Fax client. Why?
	
	  A. The network fax server components have been redesigned in Windows 95,
	  causing you to be unable to connect to Windows 95 network fax servers using
	  Windows for Workgroups At Work Fax clients. A resolution for this problem
	  should be available soon.
	
	5. Q. Why is Microsoft Fax unable to initialize the modem when I start Microsoft
	  Exchange? CompuServe Mail does not seem to have a problem accessing the
	  modem.
	
	  A. If you have both CompuServe Mail and Microsoft Fax services installed in
	  your Microsoft Exchange profile and you have enabled the Retrieve Mail On
	  Startup option for CompuServe Mail, Microsoft Fax cannot initialize the port
	  until the CompuServe Mail service disconnects and releases the port. To work
	  around this behavior, disable the Retrieve Mail On Startup option in
	  CompuServe Mail so that Microsoft Fax can initialize the modem. Once
	  Microsoft Fax has initialized the modem, connect to CompuServe and retrieve
	  your mail.
	
	6. Q. When I compose a new message and address it using the [FAX:XXX-XXXX]
	  format, the prefix settings are ignored. Why?
	
	  A. When you use this format to send a fax, Microsoft Fax does not use TAPI
	  services to create a phone number to dial and ignores prefixes defined using
	  TAPI. To work around this behavior, use the following format instead:
	
	  [FAX:+1 (XXX) XXX-XXXX]
	
	7. Q. Why does my fax/modem connect at only 9600 bits per second (bps)?
	
	  A. During the development and testing of Microsoft Fax, we found that some
	  fax/modems are unreliable when sending at 14.4 bps in fax mode. High-speed
	  transmission is disabled for these modems. If you feel your fax/modem
	  supports high-speed transmission, you can enable high-speed transmission with
	  the following steps:
	
	  1. Click the Start button, point to Settings, then click Control Panel.
	
	  2. Double-click the Mail And Fax icon, click Microsoft Fax, then click
	     Properties.
	
	  3. On the Modem tab, click your modem, then click Properties.
	
	  4. Click the Advanced button, then click the Disable High Speed Transmission
	     check box to clear it. Click OK.
	
	8. Q. Why can I send faxes but not receive them?
	
	  A. To receive incoming faxes, you must start Microsoft Exchange and set the
	  modem to Auto Answer or Manual Answer mode.
	
	9. Q. When I send a fax in binary format I receive an error message stating
	  "Editable format not supported." Why?
	
	  A. To use binary format or advanced security options, both the sending and
	  receiving fax/modems must be supported Class 1 fax/modems.
	
	10. Q. Can I make my fax/modem answer the phone in one ring?
	
	  A. No, there is no way to make the fax/modem answer in one ring. This is a
	  limitation of Microsoft Fax.
	
	Additional query words: win95q a win95faq w95tlc
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
