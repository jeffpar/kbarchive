---
layout: page
title: "Q139919: Julia Child: Err Msg: MSJULIA Causes a GP Fault"
permalink: /kb/139/Q139919/
---

## Q139919: Julia Child: Err Msg: MSJULIA Causes a GP Fault

{% raw %}

	Article: Q139919
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Julia Child: Home Cooking with Master Chefs for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Julia Child, if you rename Rcpnotes.dat to Shoplist.dat, you
	receive a general protection(GP) fault error message when you click Options, and
	then click the Shopping List:
	
	  MSJULIA caused a General Protection Fault in module MSJULIA.exe at
	  <XXXX.XXXXXXXX>
	
	where <XXX:XXX> is the memory address.
	
	You receive the same error message if you rename Shoplist.dat to Rcpnotes.dat,
	and click Options, and then click Notes.
	
	The GP fault is the same, and is preceded by:
	
	  An error has occurred in your application. If you choose Ignore, you should
	  save your work in a new file. If you choose Close, your application will
	  terminate.
	
	CAUSE
	=====
	
	The Shoplist.dat and Rcpnotes.dat files use the same format. The program
	attempts to use the misnamed file, causing a GP fault. If files of a different
	format are used, you receive the expected error indicating that the program
	cannot read the file.
	
	RESOLUTION
	==========
	
	A new Shoplist.dat and Rcpnotes.dat is created if either file is missing. To
	resolve the problem described above, delete one or both of these files and start
	Julia Child.
	
	MORE INFORMATION
	================
	
	If you delete either of these files, you receive an error message stating that
	either your notes file or shopping list file cannot be found. This message
	refers you to read the Readme.wri file for further information.
	
	To create a new Shoplist.dat or Rcpnotes.dat, click OK. Then, click Options, and
	click Shopping List or click Options, and then click Notes (depending on which
	file you want to create).
	
	Additional query words: multi media multimedia multi-media mmtitles
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword kbJuliaChild
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
