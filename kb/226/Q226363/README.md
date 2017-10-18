---
layout: page
title: "Q226363: HTMLA Web Administration Forms Display Incorrect Max Log Size"
permalink: kb/226/Q226363/
---

## Q226363: HTMLA Web Administration Forms Display Incorrect Max Log Size

	Article: Q226363
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up logging for Internet Information Services (IIS) 5.0 using the
	HTMLA Web Administration Forms, the value for "When Max File Size Reaches ..."
	may be incorrectly formatted. This should only effect the following languages:
	
	  German
	  Japanese
	  Arabic
	  Russian
	
	The default value for the maximum file size is 19.53125 MB. These languages are
	normally formatted as follows:
	
	  German: 19,53 (comma as decimal symbol, 2 digits after decimal) (currently
	  displays 5 decimal places, not 2)
	
	  Japanese: 19.53 (period as decimal symbol, 2 digits after decimal) (currently
	  displays 5 decimal places, not 2)
	
	  Arabic: 19.53 (period as decimal symbol, 2 digits after decimal) (currently
	  19,53125)
	
	  Hindi: 19.53 (period as decimal symbol, 2 digits after decimal) (currently
	  displays 5 decimal places, not 2)
	
	  Russian: 19,53 (comma as decimal symbol, 2 digits after decimal) (currently
	  displays 5 decimal places, not 2)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	5.0.
	
	Additional query words: Globalization
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
