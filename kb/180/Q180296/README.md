---
layout: page
title: "Q180296: MS Mail Gateway to NGW Dirsync Fails to Provide Complete GAL"
permalink: kb/180/Q180296/
---

## Q180296: MS Mail Gateway to NGW Dirsync Fails to Provide Complete GAL

	Article: Q180296
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This gateway was written by Novell and is Beta code. The gateway will only
	perform a dirsync the first instance of each firstname from the GroupWise
	addresses. The Microsoft Mail addresses are transferred to GroupWise correctly.
	
	CAUSE
	=====
	
	This problem is because the field that Novell chose to use from GroupWIse as the
	source of the address to be dirsynced. This field contains the equivalent of the
	Display Name in Microsoft Mail. This field is then put into the Mailbox ID on
	Microsoft Mail, which is limited to ten characters with no spaces. The GroupWise
	field allows spaces. If the GroupWise field contains Firstname Lastname, only
	the first occurrence of each Firstname will be dirsynced to the Microsoft Mail
	FFAPI postoffice created to contain the GroupWise addresses.
	
	This gateway uses OS/2 FFAPI on the Microsoft Mail side to extract messages from
	and put messages into Microsoft Mail. The GroupWise OS/2 API gateway is required
	on the GroupWise side to extract messages from and put messages into GroupWise.
	Message flow appeared to work correctly but was not extensively tested with
	attachments.
	
	Additional query words: NGW GROUPWISE
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2,3.2a,3.5
	
	=============================================================================
	
