---
layout: page
title: "Q243777: Nothing Happens When You Click Save in &quot;Save File As&quot; Box"
permalink: /kb/243/Q243777/
---

## Q243777: Nothing Happens When You Click Save in &quot;Save File As&quot; Box

	Article: Q243777
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:2000,95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click Save in the Save File As common dialog box, nothing may happen,
	or the contents of the Look In box may change.
	
	CAUSE
	=====
	
	This behavior can occur if the the File Name box contains an asterisk (*) or
	question mark (?). These characters are reserved for use as wildcards and cannot
	be used in a file name.
	
	RESOLUTION
	==========
	
	Specify a file name that does not contain an asterisk or question mark.
	
	STATUS
	======
	
	This behavior is by design and is shared by all Windows-based programs that use
	the common Save File As dialog box.
	
	MORE INFORMATION
	================
	
	You can use wildcards to reference more than one file name by using special
	characters. A wildcard is a character (either an asterisk or a question mark)
	that is used to express that any combination of characters is allowed in a
	certain section of a string. For example, if you want to list all files that
	begin with the string "user" but can contain any other characters and any
	extension, use the following wildcard:
	
	  user*.*
	
	If you want to list all files that start with any character, then contain the
	string "user" and have any extension, use the following wildcard:
	
	  ?user*.*
	
	File names that contain other illegal characters, such as a colon (:), generate
	the following error message:
	
	  <Filename> This filename is not valid.
	
	The characters that are valid for a file or folder name include any combination
	of letters (A-Z) and/or numbers (0-9), plus the following special characters:
	
	  $   Dollar sign
	  %   Percent 
	  '   Apostrophe
	  `   Opening single quotation mark
	  -   Hyphen
	  @   At sign
	  {   Left brace
	  }   Right brace
	  ~   Tilde
	  !   Exclamation point
	  #   Number sign
	  (   Opening parenthesis
	  )   Closing parenthesis
	  &   Ampersand 
	  _   Underscore
	  ^   Caret
	      space
	  +   Plus sign
	  ,   Comma
	  .   Period
	  =   Equal sign
	  [   Opening bracket
	  ]   Closing bracket
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin95search kbWin98search kbWin98SEsearch kbWinAdvServSearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:2000,95
	Issue type        : kbprb
	
	=============================================================================
	
