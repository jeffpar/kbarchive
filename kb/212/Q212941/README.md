---
layout: page
title: "Q212941: SMS: How to Perform a Search and Replace by Using SMS Installer"
permalink: kb/212/Q212941/
---

## Q212941: SMS: How to Perform a Search and Replace by Using SMS Installer

	Article: Q212941
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtool kbsmsInst
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes one method for searching and replacing text by using
	Systems Management Server (SMS) Installer. The text source could be a file, an
	environment variable, a registry key, or other input source. This article is
	useful after:
	
	- You have read the text into your script as a variable.
	- You have defined variables for your search and your replace strings.
	
	MORE INFORMATION
	================
	
	To perform a search and replace:
	
	1. Split the text variable at the occurrence of your search pattern into two
	  destination variables.
	2. Append the replace variable to the first part of the split text.
	3. Append the second part of the split text to the first part of the split text
	  (which already contains the replace variable). The first part of the split
	  text now is the entire text, with the replaced value.
	4. Set the original text variable to the first part of the split text.
	
	The following script example is based on the following conditions:
	
	- The text to be searched and replaced is in variable TEXT.
	- The string to search is in variable SEARCH.
	- The string to replace the search string is in variable REPLACE.
	
	A search and replace portion of a script it appears in the SMS Installer Script
	Editor view:
	
	Parse String "%TEXT%" into PART1 and PART2
	Set Variable PART1 to %REPLACE% (Append)
	Set Variable PART1 to %PART2% (Append)
	Set Variable TEXT to %PART1%
	
	Search and replace portion of the script code (ipf file). To use this example,
	cut and paste the following code example into the SMS Installer Script editor:
	
	  item: Parse String
	    Source=%TEXT%
	    Pattern=%SEARCH%
	    Variable1=PART1
	    Variable2=PART2
	   end
	  item: Set Variable
	    Variable=PART1
	    Value=%REPLACE%
	    Flags=00000001
	  end
	  item: Set Variable
	    Variable=PART1
	    Value=%PART2%
	    Flags=00000001
	  end
	  item: Set Variable
	    Variable=TEXT
	    Value=%PART1%
	  end
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsmsInst 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbhowto
	
	=============================================================================
	
