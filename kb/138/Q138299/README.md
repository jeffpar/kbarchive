---
layout: page
title: "Q138299: INFO: Legal Visual SourceSafe Naming Conventions"
permalink: /kb/138/Q138299/
---

## Q138299: INFO: Legal Visual SourceSafe Naming Conventions

{% raw %}

	Article: Q138299
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500
	Last Modified: 18-FEB-2002
	
	SUMMARY
	=======
	
	Visual SourceSafe does not allow certain characters in project names and
	filenames. Some of these limitations are specific to certain operating systems
	and some are over all platforms. Attempting to use these characters may cause
	the computer to hang (stop responding), quit, or corrupt some files. Please use
	caution when dealing with non-standard names.
	
	MORE INFORMATION
	================
	
	Legal Filename Syntax
	---------------------
	
	NTFS::
	
	- 1 to 255 character name
	
	- Complete path for a file or project name cannot exceed 259 characters,
	  including the separators
	
	- May not begin or end with a space
	
	- May not begin with a $
	
	- May contain 1 or more file extensions (eg. MyFile.Ext1.Ext2.Ext3.Txt)
	
	- Legal characters in the range of 32 - 255 but not ?"/\<>*|:
	
	- Filenames may be mixed case
	
	- Filename comparisons are case insensitive (eg. ThIs.TXT = this.txt)
	
	MS-DOS and Windows 3.1::
	
	- 1 to 11 characters in the 8.3 naming convention
	
	- Legal characters are A-Z, 0-9, Double Byte Character Set (DBCS) characters
	  (128 - 255), and _^$~!#%&-{}@'()
	
	- May not contain spaces, 0 - 31, and "/\[]:;|=,
	
	- Must not begin with $
	
	- Uppercase only filenames, lowercase letters are mapped to uppercase
	
	
	Legal Project Name Syntax:
	
	- Project name must be 1 to 259 characters in length
	
	- Illegal characters are "\<>|:; and tab
	
	- May not begin or end with spaces
	
	- May not begin with a $
	
	- May contain DBCS characters
	
	Legal Label Syntax:
	
	- Label must be 1 to 31 characters in length
	
	- Must not begin or end with spaces or tabs
	
	- May contain DBCS characters
	
	Legal Username Syntax:
	
	- Username must be 1 to 31 characters
	
	- Must not begin or end with a space
	
	- May not contain !"$%'()/:;<>?@[]\{}=^|*, or tab
	
	- May contain DBCS characters
	
	REFERENCES
	==========
	
	Query using "Conventions for Filenames" in Visual SourceSafe Books Online.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
