---
layout: page
title: "Q279158: XADM: Exchange 5.5 May Not Close Registry Properly After Install"
permalink: /kb/279/Q279158/
---

## Q279158: XADM: Exchange 5.5 May Not Close Registry Properly After Install

{% raw %}

	Article: Q279158
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Exchange Server 5.5 on a cluster, the wizard sets up the
	services in the registry as resources. It apparently does not add NULL to the
	end of the strings. Everything appears in Regedt32 and Cluadmin, but if you open
	up the saved hive as a binary file, you can see, for example, that MSExchangeDS
	is not followed by NULL, whereas something like the Cluster Name Name property
	value is.
	
	MORE INFORMATION
	================
	
	The manual workaround is to open up the registry for that value, and retype the
	name exactly as you see it. That way, the string will be correct and you will
	not see this problem. You can also go to the end of the string, press DELETE
	once or twice to remove any unseen characters. Also, as another workaround, you
	can use the following two-part procedure.
	
	Part One
	--------
	
	Perform this step on the primary node first. You can either stop the cluster
	service on the second node, or run the same commands on the next node.
	
	1. Using Regfind from either the Microsoft Windows NT 4.0 version 3 Resource Kit
	  or the Microsoft Windows 2000 Resource Kit, use the following command to
	  gather and check the registry settings:
	
	  regfind <local machine name> -p HKEY_LOCAL_MACHINE\cluster -z >
	  <filename.txt>
	
	2. Open the text file and it will show you what keys do not end in NULL under
	  the cluster hive. The following is a standard installation of Exchange Server
	  5.5 on a Windows 2000 cluster server with Service Pack 1 (SP1). Your results
	  may vary:
	
	HKEY_LOCAL_MACHINE\cluster
	   Resources
	   09df7cdc-636e-49c9-8f47-ad8bffa4c82b
	   Parameters
	   ServiceName = (*** MISSING TRAILING NULL CHARACTER***)MSExchangeIS 0e286e64-fd88-42bf-a9db-5c1feba9bbda
	   Parameters
	   ServiceName = (*** MISSING TRAILING NULL CHARACTER ***)MSExchangeMSMI
	   1a6745a2-d268-4b77-8d8c-621630c11866
	   Description = (*** MISSING TRAILING NULL CHARACTER ***)'"Exchange message tracking logs"'248941cc-057c-46c4-b3b5-ae416907181c
	   Description = (*** MISSING TRAILING NULL CHARACTER ***)MS Schedule+ Free/Busy Connector
	   Parameters
	   ServiceName = (*** MISSING TRAILING NULL CHARACTER ***)MSExchangeFB
	   2863ea10-e0b4-4e5c-93dd-754a3448baa0
	   Parameters
	   ServiceName = (*** MISSING TRAILING NULL CHARACTER ***)MSExchangeDS
	   4215a05b-26e7-42dc-84d7-50f74c7ba312
	   Parameters
	   ServiceName = (*** MISSING TRAILING NULL CHARACTER ***)MSExchangeDX
	   619701dd-1c23-42fc-a9b8-9c1d94e6d0af
	   Description = (*** MISSING TRAILING NULL CHARACTER ***)Microsoft Exchange System Attendant
	   Parameters
	   ServiceName = (*** MISSING TRAILING NULL CHARACTER ***)MSExchangeSA
	   635372ed-1d4b-49ba-9b13-3c1d08df61eb
	   Description = (*** MISSING TRAILING NULL CHARACTER ***)'"Access to address objects"'7208345a-9beb-45f3-bdf3-30fb073dba0f
	   Description = (*** MISSING TRAILING NULL CHARACTER ***)Microsoft Exchange Event Service
	   Parameters
	   ServiceName = (*** MISSING TRAILING NULL CHARACTER ***)MSExchangeES
	   c5c03485-7d2e-40fa-8438-b17ff33832dc
	   Description = (*** MISSING TRAILING NULL CHARACTER ***)'"Access for MSMI postoffice"'f6d99bf9-44bc-41cb-a919-0617af627459
	   Description = (*** MISSING TRAILING NULL CHARACTER ***)'"Access to EDK objects"'
	
	3. If you are satisfied with the selection of keys under the cluster hive that
	  Regfind will edit, go to Part Two.
	
	Part Two
	--------
	
	Using the following command to add NULL to the registry keys in your text file:
	
	  regfind <local machine name> -p HKEY_LOCAL_MACHINE\cluster -z -r >
	  <filename.txt>
	
	Adding a text file is optional, but recommended just to compare and make sure.
	
	The command, regfind /?, will give you detailed descriptions of the command
	options.
	
	This problem has been seen with the product PATROL for Microsoft Windows 2000;
	the component name is PATROL Knowledge Module for Microsoft Cluster Server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
