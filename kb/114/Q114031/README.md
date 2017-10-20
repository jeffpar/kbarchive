---
layout: page
title: "Q114031: PC Ext: External 3.2.5 Doesn't Accept SendHomeOnly Parameter"
permalink: /kb/114/Q114031/
---

## Q114031: PC Ext: External 3.2.5 Doesn't Accept SendHomeOnly Parameter

{% raw %}

	Article: Q114031
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 3.2.5 of the External Mail program (EXTERNAL.EXE) ignores the
	SendHomeOnly parameter when it is used either in an EXTERNAL.INI file or on a
	command line.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2.5 of the External
	Mail program. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	RESOLUTION
	==========
	
	Use the -AH command-line parameter in place of SendHomeOnly .INI parameter.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Set up two postoffices and map drive letters to them (M:=Net1/PO1,
	  N:=Net2/PO2).
	
	2. Configure an external postoffice definition on Net2/PO2 to Net3/PO3 direct
	  via a modem connection.
	
	3. Create the following EXTERNAL.INI file and copy it to PO1's INI directory:
	
	  [External]
	  DriveHomePO=M
	  DrivesDirectPO=MN
	  SendHomeOnly
	
	  [External-MTA1]
	  CommType=async
	  CommScript=HAYES24
	  AsyncCommPort=com1
	
	4. Compose a message from PO2 to a recipient on PO3.
	
	5. Run the External Mail program using the following command line:
	
	  external /instancename=mta1
	
	  The External Mail program will attempt to make an asynchronous (modem)
	  connection to PO3, even though PO3 is not the home postoffice.
	
	6. Remove the SendHomeOnly parameter from the EXTERNAL.INI file and run the
	  External Mail program using the following command line:
	
	  external /instancename=mta1 /sendhomeonly
	
	  The External Mail program attempts the same asynchronous connection as in Step
	  5.
	
	7. Run the External Mail program again, using the following command line:
	
	  external /instancename=mta1 -ah
	
	  The External Mail program does not attempt to make the asynchronous connection
	  to PO3.
	
	
	Additional query words: 3.20 async
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
