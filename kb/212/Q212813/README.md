---
layout: page
title: "Q212813: SMS: Comment Text Not Inserted With &quot;Insert line into Text File&quot;"
permalink: kb/212/Q212813/
---

## Q212813: SMS: Comment Text Not Inserted With &quot;Insert line into Text File&quot;

	Article: Q212813
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the Insert Line into Text File, Add to Autoexec.bat, or Add to
	Config.sys script items and setting the insert action within the script item
	dialog to Replace Line Containing Text, the comment text specified is not
	inserted into the target file.
	
	MORE INFORMATION
	================
	
	This action is by design. When using the Replace Line Containing text insert
	action for the Insert Line Into Text File script item or any other script items
	that uses the same interface such as Add to Autoexec.bat or Add to Config.sys,
	the Replace Line Containing Text insert action does not preserve the previous
	line. Thus, there is nothing to comment.
	
	To have lines inserted while maintaining the replaced lines in the file as
	comments, use the Insert Before Line Containing Text or Insert After Line
	Containing Text insert actions. These actions will prepend the previous line
	with the comment text specified in the script item and then insert the new line
	accordingly.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMSI100 kbSMSI200
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbinfo
	
	=============================================================================
	
