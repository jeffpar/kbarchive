---
layout: page
title: "Q189621: Print Server Overrides Paper Source Parameters When Using HPT"
permalink: /kb/189/Q189621/
---

## Q189621: Print Server Overrides Paper Source Parameters When Using HPT

	Article: Q189621
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Host Print Transform (HPT) configuration in SNA Server 4.0 and 4.0 SP1 no
	longer includes the options to specify the Paper Source to be used by the AS/400
	print session. Even though the Paper Source parameters can be configured
	manually on the AS/400 for the AS/400 Print Device(s) being used, these
	parameters are overridden by SNA Server's Print Server each time the print
	session is restarted. If the AS/400 Print Device is configured to use a Paper
	Source of *CONT132, it is changed to *LETTER when the AS/400 print session on
	SNA Server is restarted.
	
	CAUSE
	=====
	
	When a print session is configured to use HPT, the Print Device on the AS/400 is
	updated each time the print session is started on the SNA Server computer. The
	print server passes various parameters to the AS/400 in the PIP (Program
	Initialization Parameters) data of the FMH-5 Attach message when it initializes
	a print session. The Paper Source parameters are included in this PIP data,
	which causes the manually configured Paper Source parameter to be reset on the
	AS/400 print device.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	and 4.0 SP1. This problem was corrected in the latest SNA Server version 4.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces): S E R V P A
	C K
	
	
	MORE INFORMATION
	================
	
	An updated Snacfg.exe file is now available that allows the Paper Source
	parameters to be configured for the AS/400 print sessions on SNA Server. The
	following is an example of the format of the command used to set these
	parameters:
	
	  snacfg printsessionappc <print session name> /server:<server
	  name> /as400devicename:<AS/400 Print Device> /locallualias:<Local
	  APPC LU Alias> /remotelualias:<Remote APPC LU Alias>
	  /papersrc1:CONT132
	
	SNA Server version 4.0 and 4.0 SP1 do not include all of the Host Print Transform
	(HPT) options that SNA Server versions 3.0 SP2 and 3.0 SP3 included. Only the
	following HPT options are available with SNA Server versions 4.0 and 4.0 SP1:
	
	- Message Queue Name
	
	- Message Lib Name
	
	- Printer Type
	
	The following options are available when HPT is configured on SNA Server versions
	3.0 SP2 and 3.0 SP3:
	
	- Font ID
	
	- Message Queue Name
	
	- Message Lib Name
	
	- Form Feed
	
	- Printer Type and Model
	
	- Paper Source 1
	
	- Paper Source 2
	
	- Envelope Source
	
	- ASCII Code Page 899 Support
	
	- Customizing Library Name
	
	- Customizing Object Name
	
	For more information on these features, please refer to the following Knowledge
	Base article:
	
	  Q169892 Host Print Transform Can Now Be Configured by SNA Server
	
	For more information on a similar issue in SNA Server 4.0 and 4.0 SP1 regarding
	the Font ID parameter, please refer to the following Knowledge Base article:
	
	  Q194598 Print Server Overrides Font ID Parameter When Using HPT
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
