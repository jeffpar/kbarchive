---
layout: page
title: "Q196693: XADM: How To Use ESEUTIL /U to Upgrade a Database"
permalink: /kb/196/Q196693/
---

## Q196693: XADM: How To Use ESEUTIL /U to Upgrade a Database

{% raw %}

	Article: Q196693
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have an Exchange Server database file (Priv.edb, Pub.edb, or Dir.edb)
	from Exchange Server 4.0 or 5.0, you can use the ESEUTIL utility to manually
	upgrade the database to an Exchange Server 5.5 database. This is particularly
	useful if the only good backup you have for your Exchange Server computer is
	from a previous version of Exchange Server.
	
	MORE INFORMATION
	================
	
	In order to perform the upgrade using ESEUTIL, you will need the following
	files:
	
	- The Exchange 5.5 version of Eseutil.exe
	
	- The Exchange 5.5 version of Ese.dll
	
	- The previous version database file (Priv.edb, Pub.edb or Dir.edb)
	
	- The Edb.dll from the Exchange 5.5 CD. This file can be found in the
	  server\setup\<platform> directory on the Exchange 5.5 CD.
	
	Put all of these files into a directory on your hard drive, open an MS-DOS
	command prompt in that directory, and run the following command:
	
	  " ESEUTIL /u <database name> /dEDB.DLL" (without the quotation marks)
	
	where the <database name> is either Priv.edb, Pub.edb, or Dir.edb.
	
	*NOTE: There is no space after the /d switch.
	
	**NOTE: If you do not use the correct version of Edb.dll, you will receive the
	following error:
	
	  Error -1003 (0xfffffc15) = JET_errInvalidParameter
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
