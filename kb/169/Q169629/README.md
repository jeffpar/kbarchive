---
layout: page
title: "Q169629: XFOR: Installing the Proxy Address Generator for Exchange-SNADS"
permalink: /kb/169/Q169629/
---

## Q169629: XFOR: Installing the Proxy Address Generator for Exchange-SNADS

	Article: Q169629
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a multiple-site environment, sites other than the site where LinkAge Message
	Exchange is installed need the proxy generator and the address template to send
	and receive mail with the connected systems.
	
	The following steps are necessary to install the proxy generator and the address
	template for the LinkAge Exchange-SNADS Connector on a site that is separate
	from the site where the connector is installed.
	
	1. The following files are required for these steps and can be obtained from the
	  C:\Linkage\Install directory, located on the currently installed LinkAge
	  connector.
	
	   - Mexitmpl.exe
	
	   - Mexiaddr.exe
	
	   - Ibmpxgen.dll
	
	   - Ibmscr.blt
	
	   - Ibmadt.blt
	
	   - Ibmadt.hlp
	
	2. Create a C:\Linkage\Install directory on the Exchange Server computer in the
	  site where the proxy generator and the address template are to be installed,
	  and copy the above files into this directory.
	
	3. Create the following directory where the SNADS proxy address generator will
	  exist:
	
	  \\MEXServerName\Address\SNADS\I386
	
	4. Copy the following file into the directory created in step 3:
	
	  Ibmpxgen.dll
	
	5. To install the SNADS address template on the Exchange Server computer, run
	  the following command from the C:\Linkage\Install directory:
	
	  mexitmpl "/org=MEXOrganization" "/site=MEXSite"
	  "/Server=MEXServerName"
	  /ADDRTYPE=SNADS /SYNTAX=c:\linkage\install\ibmscr.blt
	  /ADDRESS_DT=c:\linkage\install\ibmadt.blt /LANGUAGE=409
	  /FILE=c:\linkage\install\ibmadt.hlp
	  /DATA16=c:\linkage\install\ibmadt.hlp
	  /DATA32=c:\linkage\install\ibmadt.hlp /SF
	
	6. Check the following files to see if any errors occurred with the above
	  command:
	
	   - Lmeistat.txt
	
	   - Lmeilog.txt
	
	7. To install the proxy address rule and to optionally generate proxy addresses,
	  run the following command from the C:\Linkage\Install directory:
	
	  mexiaddr "/org=MEXOrganization" "/site=MEXSite"
	  /Server=MEXServerName"
	  /ADDRTYPE=SNADS /MACHINE=I386 "/PROXYRULE=SNADS:nodeid(&m)"
	  /PROXYDLL=c:\linkage\install\ibmpxgen.dll /SF
	
	  Replace nodeid with the node ID assigned to the connector.
	
	  If proxy addresses are NOT to be generated, then insert /NOGENADDR before the
	  /SF.
	
	8. Check the following file to see if any errors occurred with the above
	  command:
	
	   - Lmeistat.txt
	
	   - Lmeilog.txt
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbhowto
	
	=============================================================================
	
