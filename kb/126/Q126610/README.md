---
layout: page
title: "Q126610: PC DirSync: Import -X Fails for SNADS Gateway"
permalink: /kb/126/Q126610/
---

## Q126610: PC DirSync: Import -X Fails for SNADS Gateway

	Article: Q126610
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0a,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0a, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IMPORT.EXE may fail to extract SNADS addresses from a gateway postoffice if the
	gateway name was installed with one of the following names:
	
	  MSMAIL
	  FAX
	  MCI
	  X400
	  SMTP
	  MHS
	
	IMPORT.EXE recognizes these names as specific types of gateways, and they should
	not be used for the name of the SNADS gateway.
	
	If one of these names is used, the command line
	
	  IMPORT Admin -ppassword -dm -gSNADS -ftest.txt -x
	
	will fail to create the expected text in the file TEST.TXT. However, no error
	message will be received.
	
	RESOLUTION
	==========
	
	This problem can be corrected by changing the SNADS gateway name to a unique
	network name.
	
	MORE INFORMATION
	================
	
	During installation of the SNADS gateway, step 3 prompts for the gateway name
	and the following message appears:
	
	  Note: This must be a unique network name.
	
	The SNADS installation program will allow input of the gateway names listed above
	if these gateways are not currently installed. However, IMPORT.EXE will not
	properly initialize the DGN's for the SNADS gateway if one of these names is
	used for as the gateway name.
	
	
	Additional query words: 3.00a 3.20 3.20a 3.50 dirsync
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300a kbMailPCN350
	Version           : WINDOWS:3.0a,3.2,3.2a,3.5
	
	=============================================================================
	
