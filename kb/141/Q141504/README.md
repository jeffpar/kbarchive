---
layout: page
title: "Q141504: HOWTO: Make SourceSafe Keyword Expansion Work in Text Docs"
permalink: /kb/141/Q141504/
---

## Q141504: HOWTO: Make SourceSafe Keyword Expansion Work in Text Docs

	Article: Q141504
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbDSupport kbSSafe310 kbSsafe600FAQ
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up SourceSafe to use keyword expansion. Note
	that keyword expansion occurs only if a user changes a file and then updates or
	checks in the file. The following table lists and describes the valid keywords:
	
	  Valid Keyword     Description
	  ---------------------------------------------------------------
	  $Archive: $       && Project path and file name in SourceSafe
	  $Author:  $       && User who last changed the file
	  $Date:  $         && Date and Time of last check in
	  $Header: $        && Archive Info, Revision, Date, User
	  $Logfile: $       && Same as $Archive: $
	  $Modtime: $       && Date and time of last modification
	  $Revision: $      && Revision number
	  $Workfile: $      && File name
	  $Log:  $          && Same as $History: $ except in RCS format
	  $History: $       && File name, Revision, Date, Time, User
	  $NoKeywords: $    && Disables all keywords after this keyword
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. To make keyword expansion work, use either one of the two following methods:
	   - In the Visual SourceSafe Administrator, point to Tools and click Options
	     and in the "Expand keywords in files of type" option, enter the file types
	     for the keyword expansion. For example, type *.txt.
	   - Add the following line to the Srcsafe.ini file on the server:
	
	     Keyword_Masks = *.TXT
	
	  NOTE: Use of incorrect keyword syntax, such as leaving off the trailing dollar
	  sign of a keyword, may cause unpredictable results.
	
	  NOTE: It must also be placed before the first occurrence of a section header
	  in the Srcsafe.ini file. A section header is a line enclosed in square
	  brackets, that is, [$/MyProj]. This setting will not work if placed in an
	  individual user's ss.ini file.
	
	  Optionally, the following line can be added to the Srcsafe.ini file. This
	  setting updates keywords in a user's working directory with the new keyword
	  information when a user updates or checks in a file.
	
	     Expand_Keywords_Locally = YES
	
	  NOTE: You can put the Expand_Keywords_Locally setting into a user's Ss.ini
	  file to individualize settings.
	
	  NOTE: The file may not have updated keywords if the user chooses to keep the
	  file checked out on the update (that is, Keep_Checkedout=YES).
	
	  NOTE: On SourceSafe for the Macintosh versions 3.04 and 3.1, keyword expansion
	  only works with a specific setup. For more information, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q129192 BUG: Keyword Expansion Fails on the Macintosh
	
	  NOTE: The "Keyword_Masks =" line can have any extension or combination of
	  extensions. If you use more than one extension, you must separate them with a
	  comma or the keyword expansion won't work. For example:
	
	     Keyword_Masks = *.C, *.CCP, *.H, *.HPP, *.BAS
	
	2. For more information about adding keywords to files, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q131092 PRB: Keyword Expansion is Case Sensitive
	
	  NOTE: In the User's Guide, the keyword is $NoKeywords: $ is incorrect. It is
	  listed as $Nokeywords: $, with a lower case k. It should be $NoKeywords: $,
	  with an upper case K. This keyword will not work with a lower case k.
	
	3. Format the keywords correctly. There are two ways to format keywords in
	  files. The most frequently used method is to align the keywords on the left
	  margin:
	
	  $Archive: $
	  $Author: $
	  $Date: $
	
	  When expanded, it will look like this:
	
	  $Archive: /KeywordAlignTest/KeyAlign1.txt $
	  $Author: Guest $
	  $Date: 11/23/95 9:31a $
	
	  The other way is to format the keywords so that when they are expanded, the
	  values are aligned in a column. Note the use of two colons and the amount of
	  space between the colons and the second dollar sign.
	
	  $Archive::                                                   $
	   $Author::                                                   $
	     $Date::                                                   $
	
	  When it is expanded, it looks like the following:
	
	  $Archive:: /KeywordAlignTest/KeyAlign1.txt                   $
	   $Author:: Guest                                             $
	     $Date:: 11/11/95 5:57p                                    $
	
	  If you don't leave enough space between the colons and the dollarsign,
	  SourceSafe will truncate the value so it would look like the following:
	
	  $Archive:: /KeywordAli$
	   $Author:: Guest      $
	     $Date:: 11/11/95 5:$
	
	4. Place comment characters in front of keywords so the keywords are not
	  compiled. SourceSafe sets the following comment characters by default:
	
	  *.ASM = "; "
	  *.BAS = "rem "
	  *.BAT = "rem "
	  *.S = "; "
	  ;default comment for all other file types
	  *.* = "* "
	
	  If you want to use a different comment character in a file that has a specific
	  file extension, add the following lines to the Srcsafe.ini file on the
	  server:
	
	  [Keyword Comments]
	  *.C = "/*","*/"
	
	  The comment character is especially important in dealing with $Log: $ and
	  $History: $ keywords. Unlike the other keywords, $Log: $ and $History: $
	  keywords add more information to the file each time keywords are updated --
	  instead of just replacing the previous information with the current
	  information. A comment character, as defined by the Srcsafe.ini, is added to
	  the beginning of each line created by $Log: $ and $History: $ keywords. For
	  example, if the following is in a .txt file:
	
	  *$Log: $
	  *$History: $
	
	  and the default comment characters are in effect, it would look like the
	  following after keyword expansion took place:
	
	     *$Log: /KeywordAlignTest/KeyAlign1.txt $
	      *
	      * 3    11/23/95 10:47a Guest
	      *
	      * 2    11/23/95 10:45a Guest
	      *
	      * 1    11/11/95 5:57p Guest
	     *$History: KeyAlign1.txt $
	      *
	      * *****************  Version 3  *****************
	      * User: Guest     Date: 11/23/95   Time: 10:47a
	      * Updated in $/KeywordAlignTest
	      *
	      * *****************  Version 2  *****************
	      * User: Guest     Date: 11/23/95   Time: 10:45a
	      * Updated in $/KeywordAlignTest
	      *
	      * *****************  Version 1  *****************
	      * User: Guest     Date: 11/11/95   Time: 5:57p
	      * Updated in $/KeywordAlignTest
	
	REFERENCES
	==========
	
	Microsoft Visual SourceSafe User's Guide for version 4.0, pages 68-71
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 kbFAQ kbDSupport kbSSafe310 kbSsafe600FAQ 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
