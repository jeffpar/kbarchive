---
layout: page
title: "Q171929: Internet Explorer 3.0 SBS: Web Address Returns Error Message"
permalink: /kb/171/Q171929/
---

## Q171929: Internet Explorer 3.0 SBS: Web Address Returns Error Message

{% raw %}

	Article: Q171929
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Internet Explorer 3.0 Step by Step ISBN 1-57231-300-5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Internet Explorer 3.0 Step by Step, ISBN: 1-57231-300-5, page 12,
	step 4, asks you to connect to the following Web site:
	
	  http://www.microsoft.com/mspress/fnm/
	
	Doing so will return an error similar to the following:
	
	  HTTP/1.0 404 Object Not Found.
	
	CAUSE
	=====
	
	The Microsoft Press Web site has changed to the following address:
	
	  http://mspress.microsoft.com/
	
	WORKAROUND
	==========
	
	Each time in the book when you see A URL with this sequence in it:
	
	  http://www.microsoft.com/mspress/
	
	Replace the "www" with "mspress." Thus, this address:
	
	  http://www.microsoft.com/mspress/fnm/
	
	should be changed to this address:
	
	  http://mspress.microsoft.com/mspress/fnm/
	
	STATUS
	======
	
	Microsoft Press has confirmed this to be a problem in "Microsoft Internet
	Explorer 3.0 Step by Step." Microsoft Press is committed to providing
	informative and accurate books. If you have a later printing of this book, it
	may already contain the above correction.
	
	
	Additional query words: mspress ms_press press bookbug
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	

{% endraw %}
