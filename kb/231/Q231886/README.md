---
layout: page
title: "Q231886: BUG: Misleading Error 0x8004d021 When Import Transaction Fails"
permalink: kb/231/Q231886/
---

## Q231886: BUG: Misleading Error 0x8004d021 When Import Transaction Fails

	Article: Q231886
	Product(s): Microsoft Windows NT
	Version(s): 1.0,1.5
	Operating System(s): 
	Keyword(s): kbCOMPlus kbDTC kbOSWin2000bug kbGrpDSCom kbDSupport
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM+, versions 1.0, 1.5 
	- the operating system: Microsoft Windows 2000 
	- the operating system: Microsoft Windows XP 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Bring Your Own Transaction (BYOT), the import transaction may fail
	with XACT_E_TIP_PULL_FAILED. The following message may be logged in event
	viewer:
	
	  The BYOT Gateway failed to import the transaction using Transaction Internet
	  Protocol (TIP). Make sure that the installed DTC supports the TIP protocol.
	
	  Server Application ID : {A20B779B-03F6-11D3-926A-00C04F8EF295}
	  Server Application Name : server_name
	  Error Code = 0x8004d021 :
	  COM+ Services Internals Information :
	  File: .\byotex.cpp, Line: 105
	
	CAUSE
	=====
	
	This error is misleading because import transaction can fail even if Microsoft
	Distributed Coordinator (MS DTC) supports Transaction Internet Protocol (TIP).
	
	This error is returned when a PULLED command is sent to the Transaction Manager
	(TM), and the TM sends back a NOTPULLED token. Any TM that is TIP-compliant can
	send a NOTPULLED token. A TM can return this token if for any reason the Pull
	relationship is not established. For additional information, see the "More
	Information" section to follow.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	MS DTC returns a NOTPULLED token under the following circumstances:
	
	- The Transaction identifier (TrID) that is included in the PULL command is not
	  valid. TIP specification does not define a format for TrID. Each TM defines
	  its own TrID. For MS DTC, the valid TrID should comply with the following
	  format:
	
	  oletx-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
	
	  which is 43 characters long (including terminal NULL).
	
	- The application was badly designed. The transaction was committed before the
	  complete transaction tree was set up.
	
	- The specified TrID is not in the list for the active transactions. As a
	  result, the transaction is stopped or timed out.
	
	Additional query words: error 0x8004d021
	
	======================================================================
	Keywords          : kbCOMPlus kbDTC kbOSWin2000bug kbGrpDSCom kbDSupport 
	Technology        : kbOSWin2000 kbAudDeveloper kbOSWinSearch kbOSWinXP kbCOMPlusSearch kbZNotKeyword3 kbCOMPlus100 kbOSWinXPSearch
	Version           : :1.0,1.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
