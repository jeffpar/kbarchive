---
layout: page
title: "Q119696: PC Adm: Err Msg: Please Update Your Version of Foldcomp"
permalink: /kb/119/Q119696/
---

## Q119696: PC Adm: Err Msg: Please Update Your Version of Foldcomp

{% raw %}

	Article: Q119696
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the FOLDCOMP -S command to run the folder compression utility to
	compress and reset folder semaphore locks, the following error message may be
	displayed:
	
	  Checking file: .\000011a8.fld
	  Please update your version of Foldcomp.
	
	CAUSE
	=====
	
	This error is caused by a corrupted folder file (<xxxxxxxx>.FLD, where
	<xxxxxxxx> is an eight-digit number). The folder displayed on the line
	preceding the error is corrupted.
	
	RESOLUTION
	==========
	
	If you rename the corrupted folder, the FOLDCOMP -S process will complete
	successfully. Try restoring the <xxxxxxxx>.FLD file from a backup copy. If
	a backup is not available, create a new folder. This new folder will be 129
	bytes in size. Copy the new <xxxxxxxx>.FLD file to the
	<xxxxxxxx>.FLD file that is corrupted.
	
	For example, if the corrupted folder file is 000011A8.FLD and the new folder
	created is 00000011.FLD, copy 00000011.FLD to 000011A8.FLD. You can now delete
	the corrupted folder, as well as the new folder.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
