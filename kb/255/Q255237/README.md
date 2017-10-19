---
layout: page
title: "Q255237: Err Msg: DAPIWrite for Mailbox &lt;Location&gt; Failed with DAPI..."
permalink: /kb/255/Q255237/
---

## Q255237: Err Msg: DAPIWrite for Mailbox &lt;Location&gt; Failed with DAPI...

	Article: Q255237
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 29-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Exchange MAPI Management Agent, you may receive the following
	error message:
	
	  Error was encountered in function : HrDoImport calling DAPIWrite.. Error
	  message :
	  DAPIWrite for Mailbox /o=TEST/ou=TEST1/cn=Mailing Lists/cn=Test_design failed
	  with DAPI error 0x800000a6.
	
	CAUSE
	=====
	
	This issue can occur if you use illegal characters in the Display-Name-Printable
	box in the Foreign Entries Output Add template.
	
	The name in this box populates the Simple Display Name field in Exchange.
	
	RESOLUTION
	==========
	
	To resolve this issue, do not use illegal characters when you create the Simple
	Display Name for Exchange.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange does not accept the following characters in the Simple
	Display Name field.
	
	  `
	  ~
	  @
	  #
	  $
	  %
	  ^
	  &
	  *
	  [
	  ]
	  {
	  }
	  \ 
	  |
	  _
	
	Microsoft Exchange replaces any of the illegal characters with a question mark
	(?). The error message continues to occur in Microsoft Metadirectory Services
	2.1, however, the recipient of the e-mail continues to populate Microsoft
	Exchange.
	
	You may also receive the following Event ID.
	
	  Event Type: Error
	  Event Source: Directory Import
	  Event Category: None
	  Event ID: 166
	  Date: 2/21/2000
	  Time: 1:44:48 PM
	  User: N/A
	  Computer: TestServer
	  Description:
	
	The description for Event ID 166 with the Directory Import source cannot be
	found. The local computer may not have the necessary registry information or
	message DLL files to display messages from a remote computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
