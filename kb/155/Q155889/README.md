---
layout: page
title: "Q155889: BUG: File Loses One Byte When Checked Out"
permalink: /kb/155/Q155889/
---

## Q155889: BUG: File Loses One Byte When Checked Out

{% raw %}

	Article: Q155889
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a
	Operating System(s): 
	Keyword(s): kbSSafe kbSSafe400bug kbDSupport kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a file is checked out, it loses one byte. This can be seen by doing a File
	Difference. It can also been seen by looking at the byte count of the file in
	the Working Directory and comparing this to the Size displayed in the Properties
	of the file in Visual SourceSafe. This will sometimes cause the file to function
	incorrectly in its native application. Use the WIN32\SSEXP.exe or WIN32\SS.exe.
	
	- or -
	
	Change the SetTime INI variable to "Current." This can be adjusted by changing
	the value of "Set date/time on local files:" located in the Tools menu, Options
	option, on the Local Files Tab.
	
	CAUSE
	=====
	
	Upon checking out a binary file, Visual SourceSafe removes the last character if
	that character is EOF (Decimal 26; Hex 1AH) and the SetTime INI variable is set
	to anything other than Current.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This behavior seems to occur when six factors are true:
	
	1. The user is running the DOS or WIN executables, either SS or SSEXP.
	
	2. The file type in Visual SourceSafe is binary.
	
	3. The last byte of the file is Hex EOF.
	
	4. The SetTime INI setting is either Modification or Check In.
	
	5. SourceSafe is running in a 16-bit operating environment.
	
	6. Checking out the file causes SourceSafe to actually write its stored copy of
	  the file to the user's hard drive. For example, if the local copy has been
	  deleted or if the file is checked out to a directory that doesn't contain a
	  copy of the file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe kbSSafe400bug kbDSupport kbBug kbISS 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe400a kbSSafe16bitSearch
	Version           : WINDOWS:4.0,4.0a
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
