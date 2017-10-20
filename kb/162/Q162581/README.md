---
layout: page
title: "Q162581: Printer Session Font Override Option"
permalink: /kb/162/Q162581/
---

## Q162581: Printer Session Font Override Option

{% raw %}

	Article: Q162581
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Print Server service in Microsoft SNA Server, version 3.0 allows print
	sessions to be configured to specify the type of font that the printer will use
	to print the job.
	
	MORE INFORMATION
	================
	
	The Font Override option only overrides the typeface of the font used for print
	jobs. You cannot force a job to have a particular size of font even though the
	font selection dialog displays a Font Size selection. Any font size selected in
	this dialog will be ignored.
	
	The size of font to use for each job is decided dynamically by the print server
	according to the number of columns that the print job has and according to
	commands that may be in the printer data-stream.
	
	Note: The print session override options are available in the Printer Session
	Properties dialog under the Printing tab in SNA Server Manager.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
