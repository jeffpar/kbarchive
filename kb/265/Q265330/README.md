---
layout: page
title: "Q265330: XFOR: Message Text from SNADS Received As an Attachment"
permalink: kb/265/Q265330/
---

## Q265330: XFOR: Message Text from SNADS Received As an Attachment

	Article: Q265330
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbsetup exc55
	Last Modified: 17-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, Microsoft Exchange Server's connector for System Network
	Architecture Distribution Services (SNADS) formats the body of a message from a
	SNADS system as a text attachment.
	
	MORE INFORMATION
	================
	
	To change this behavior so that the message text is received in the body of a
	message, remove the comment (;) tag and change the value for "FinalDocInBody="
	from No to Yes in the [LME-SNADS] section of the Exchconn.ini file:
	
	  [LME-SNADS]
	      title = Microsoft Exchange Connector for SNADS
	      tasks = LME-SNADS-MEXIN,LME-SNADS-MEXOUT,LME-SNADS-DIAMEX,LME-SNADS-OUT,LME-SNADS-IN,LME-SNADS-MEXDIA,LME-SNADS-DXA
	      addresstype = SNADS
	      ; below are set so the user is prompted to enter the non default values
	      localrgn    =
	      localren    =MPLNT3
	      partnerrgn  =
	      partnerren  =AGCHEMA
	      locallu     = MPLNT3
	      partnerlu   = AGCHEMA
	      modename    =MSX
	      nodename    =MPLNT3
	      NumAttempts = 0
	      TimeOut     = 60
	      maxnumhops  = 10
	      inputq      = snads.in
	      outputq     = dia2mex.in
	      dbgdir      = traces
	      ; default parameters
	      ;MapCODtoRRN = No
	      ;MapRRNtoCOD = No
	      ; The following line was changed from FinalDocInBody=No to
	      ; FinalDocInBody=Yes to prevent msg body from SNADS coming as 
	      ; attachment
	      ; FinalDocInBody=No is the default setting
	      FinalDocInBody = Yes
	      ;sendattach = Yes
	      ;hostnoterightmargin = 78
	      ;ctfilename = tables\ct2
	      ;ctcompressmaxdelay = 5
	      ;autoregfilename = tables\SNADSreg
	      ;autoregistration = Yes
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
