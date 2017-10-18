---
layout: page
title: "Q155394: PRB: Double Quotes in DIR Path in INI File Can Result in Crash"
permalink: kb/155/Q155394/
---

## Q155394: PRB: Double Quotes in DIR Path in INI File Can Result in Crash

	Article: Q155394
	Product(s): Microsoft SourceSafe
	Version(s): MACINTOSH:4.0a,5.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500
	Last Modified: 22-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Macintosh, versions 4.0a, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When changing projects using ss cp, the following dialog is displayed:
	
	  Directory '"<drive:path_to_working_dir>"' not found, create?
	
	Note that there are double quotation marks (" ") around the path.
	
	If the Create button is selected when these quotation marks exist, the following
	may happen:
	
	  Error: The application "unknown" has unexpectedly quit, because an error of
	  type 3 occurred.
	
	  Error: Floating Point Coprocessor Not Installed.
	
	When these errors occur, the system locks up and has to be rebooted.
	
	CAUSE
	=====
	
	Quotation marks are included around the path in DIR section of ss.ini or
	srcsafe.ini. For example:
	
	  [$/Project1]
	  Dir (Mac) = "Macintosh HD:ssWork:"
	
	RESOLUTION
	==========
	
	If Temp_Path is set to a network drive make sure that the network connection is
	stable.
	
	Remove the quotation marks in the DIR variable in the .ini file as follows:
	
	  [$/Project1]
	  Dir (Mac) = Macintosh HD:ssWork:
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	It is common to put quotation marks around a path address in a Macintosh
	product. However, in the .ini file in Visual SourceSafe for the Macintosh, this
	is not necessary.
	
	The following setting will be required for Visual SourceSafe to use the working
	directory specified in the .ini file:
	
	  Force_Dir=Yes
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper
	Version           : MACINTOSH:4.0a,5.0
	Issue type        : kbprb
	
	=============================================================================
	
