---
layout: page
title: "Q115354: X400: -BR option and Non-zero Restart Interval Cause ERROR 0"
permalink: /kb/115/Q115354/
---

## Q115354: X400: -BR option and Non-zero Restart Interval Cause ERROR 0

{% raw %}

	Article: Q115354
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Running the gateway with a -BR option in combination with a non-zero restart
	interval can cause an "ERROR 0" (MTA control program).
	
	As a rule, error codes should NOT be 0. For instance, the "Administrator's Guide"
	says 0 means "successful result," implying that such a reported state cannot be
	an error because it is successful.
	
	
	This usage in gateway, however, is consistent because the -BR option overrides
	the restart interval (the -BT and -BD options do not). If the restart interval
	is non-zero, a warning message is sent to the log file with a non-zero error
	code.
	
	During a restart, all gateway parameters are preserved. The -BT and -BD options
	work as most users expect after a restart because their values are
	absolute--they do not depend on the gateway start time. The -BR option is
	different: because it is the only -Bx option with a value relative to the
	gateway start (or restart) time, it is the only -Bx option that requires the
	restart interval to be reset to 0.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	

{% endraw %}
