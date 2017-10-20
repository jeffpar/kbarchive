---
layout: page
title: "Q100511: PC DB: Assigning Owners to Files in NetWare 2.x and 3.x"
permalink: /kb/100/Q100511/
---

## Q100511: PC DB: Assigning Owners to Files in NetWare 2.x and 3.x

{% raw %}

	Article: Q100511
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To assign an owner to ownerless files in Novell NetWare 2.x and 3.x using the
	NetWare Filer utility (FILER.EXE), do the following:
	
	1. Log in to the network as Supervisor.
	
	2. At the Mail database directory, change to the subdirectory where the
	  suspected ownerless file resides.
	
	3. Run the Filer utility by typing the following and pressing ENTER:
	
	  "filer" (without the quotation marks)
	
	4. From the Available Topics menu, select Directory Contents, then press ENTER.
	  A listing of the files in the subdirectory will be displayed.
	
	5. To assign an owner to a single file:
	
	  a. Use the arrow keys to move the insertion point to the suspected file and
	     press ENTER.
	
	  b. From the File Options menu, select View/Set File Information and press
	     ENTER.
	
	  c. From the File Information For <filename> menu, select the Owner
	     field and press ENTER.
	
	     A list of valid NetWare user names will be displayed.
	
	  d. Highlight the Supervisor name and press ENTER. Microsoft recommends
	     assigning Supervisor as the owner because this user name will never be
	     deleted from the bindery, thus eliminating the chance of the file becoming
	     ownerless in the future.
	
	  To assign an owner to multiple files:
	
	  a. From the Directory Contents menu, use the UP ARROW and DOWN ARROW keys to
	     select each suspected file and press the F5 key at each file to select the
	     file. When you have selected each file, press ENTER.
	
	  b. From the Multiple File Operations menu, select Set Owner and press ENTER.
	
	  c. At the New File Owner prompt, use the BACKSPACE key to clear the previous
	     name, then type the name "Supervisor."
	
	
	Additional query words: 2.10 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2
	
	=============================================================================
	

{% endraw %}
