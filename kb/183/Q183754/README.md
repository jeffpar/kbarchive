---
layout: page
title: "Q183754: DMM: Cannot Send to Mailing Service"
permalink: /kb/183/Q183754/
---

## Q183754: DMM: Cannot Send to Mailing Service

	Article: Q183754
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdta word97 kbdmm
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Direct Mail Manager for Windows 
	- Microsoft Office 97 Small Business Edition for Windows, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you select to send your mailing to a mailing service, the following error
	message may be displayed:
	
	  Error (32003) - Login has failed
	
	  This error occurred when attempting to connect to your mail server. Direct
	  Mail Manager requires a MAPI compliant e-mail system for transfer of your
	  mailing data to the mailing service.
	
	After you click OK, the following message appears:
	
	  If you are not using a MAPI compliant e-mail system, you can 'manually'
	  e-mail your contact information (name, phone number, e-mail address),
	  document (<path>:\<filename> to your address list) and data file
	  (C:\Program Files\Microsoft Office\Office\Direct Mail Manager\mergedata.txt)
	  to <mailing service e-mail address>. Refer to help for more
	  information.
	
	NOTE: The <mailing service e-mail address> in the above message is one of
	the following:
	
	  Mailing Service                  Mailing Service E-mail Address
	  ---------------------------------------------------------------
	  DirectNET+ from Pitney Bowes     dnetsub@directnet.pb.com
	
	  NeopostExpress from Neopost      services@NeopostExpress.com
	
	CAUSE
	=====
	
	This functionality is by design. Direct Mail Manager only supports messaging
	application programming interface (MAPI) compliant clients. If you do not have a
	MAPI-compliant e-mail system, Direct Mail Manager will not be able to
	automatically send your mailing to a Mailing Service.
	
	RESOLUTION
	==========
	
	Install Microsoft Outlook or other MAPI compliant e-mail system.
	
	WORKAROUND
	==========
	
	Use your non-MAPI compliant e-mail system (for example: Lotus CC:Mail) to
	manually send your mailing information to the Mailing Service. Be sure to
	include the following information in your e-mail message:
	
	- Your name
	
	- Your phone number
	
	- Your e-mail address
	
	- Your address list file
	
	- The Mergedata.txt file (located in the "C:\Program Files\Microsoft
	  Office\Office\Direct Mail Manager" folder
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q182370 DMM: Err Msg: "Msexch35.dll Was Unable to Register" During Setup
	
	Additional query words: vim mapivim
	
	======================================================================
	Keywords          : kbdta word97 kbdmm 
	Technology        : kbOutlookSearch kbOfficeSearch kbAudDeveloper kbOffice97Search kbDMM
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
