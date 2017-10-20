---
layout: page
title: "Q104029: PC Win: Extended Characters Not Supported in .MMF Filename"
permalink: /kb/104/Q104029/
---

## Q104029: PC Win: Extended Characters Not Supported in .MMF Filename

{% raw %}

	Article: Q104029
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Extended characters are not supported in .MMF filenames in the following areas
	of versions 3.0 and 3.0b of Microsoft Mail for Windows:
	
	- The Backup command on the Mail menu.
	
	- The Open Message File dialog box. (You can enter an .MMF filename with
	  extended characters, or select an .MMF filename with extended characters from
	  the list box, but Mail cannot open the .MMF file.)
	
	- Mail invoked with the /f parameter (that is, MSMAIL /F NAME.MMF, where
	  NAME.MMF is a filename with extended characters). In this case, Mail cannot
	  open the .MMF file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.0b of
	Microsoft Mail for Windows. The problem was fixed in version 3.2.
	
	
	Additional query words: 3.00 3.00b 3.20 listbox
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
