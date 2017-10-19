---
layout: page
title: "Q268485: XADM: Directory Import Fails When You Use a Command Line"
permalink: /kb/268/Q268485/
---

## Q268485: XADM: Directory Import Fails When You Use a Command Line

	Article: Q268485
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Directory Import on the Tools menu in the Microsoft Exchange
	Server Administrator program, you can create or modify Exchange Server directory
	objects. You can also use the following command line to create and modify
	Exchange Server directory objects, where <options file> is the file that
	you used to specify options that are similar to the options that are specified
	in the Directory Import dialog box:
	
	  admin /i <import file> /d <directory server name> /n /o
	  <options file>
	
	However, when you run this command, the import procedure may create or modify
	objects in a container other than the default Recipients container.
	
	CAUSE
	=====
	
	This issue can occur if you are using an improperly formatted options file or
	you did not specify the correct Recipients container.
	
	RESOLUTION
	==========
	
	To resolve this issue, check the options file that is specified in the
	command-line syntax to ensure that the file is properly formatted. The options
	file must contain an [Import] section, or the information in the options file is
	not read during the import procedure. The default Recipients container is used
	unless you specify otherwise. If you specify a different container, you must use
	the relative distinguished name of the container where changes are to be made.
	
	For example, to import data into a container called "SubContainer1" that is
	located in the Recipients container, the options file must contain the following
	information:
	
	  [Options]
	  Container=Recipients/Cn=Subcontainer1
	
	To import data into a container called "OtherTopLevelContainer", the options file
	must contain the following information:
	
	  [Options]
	  Container=OtherTopLevelContainer
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
