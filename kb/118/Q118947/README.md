---
layout: page
title: "Q118947: PC Adm: Err Msg: Error 29 Alias Does Not Exist"
permalink: /kb/118/Q118947/
---

## Q118947: PC Adm: Err Msg: Error 29 Alias Does Not Exist

{% raw %}

	Article: Q118947
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Mail Administrator program (ADMIN.EXE), the IMPORT utility is
	used to create, modify, and delete users on the local postoffice. (For more
	information, please see pages 323-325 of Mail 3.2 "Administrator's Guide.")
	
	When you try to modify a user's friendly name, the following error message may be
	displayed:
	
	  Error 29 Alias does not exist [friendly name]
	
	CAUSE
	=====
	
	The syntax of the modify transaction is incorrect. The following transactions to
	modify the friendly name are not valid:
	
	  M Black, Fred {Folkstone}        PCM:NET/PO/FredB
	  M Brown, John {Lincoln}          PCM:NET/PO/JohnB
	
	RESOLUTION
	==========
	
	The proper form of the import file for modify transactions is as follows:
	
	  M Black, Fred (Folkstone)        PCM:NET/PO/FredB
	
	    Black, Fred {Folkstone}        PCM:NET/PO/FredB
	
	  M Brown, John (Lincoln)          PCM:NET/PO/JohnB
	
	    Brown, John {Lincoln}          PCM:NET/PO/JohnB
	
	Additional query words: 3.20 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
