---
layout: page
title: "Q239037: Bandwidth Throttling May Not Appear to Function in Some Cases"
permalink: /kb/239/Q239037/
---

## Q239037: Bandwidth Throttling May Not Appear to Function in Some Cases

{% raw %}

	Article: Q239037
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbInternet kbDSupport kbiis500
	Last Modified: 13-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use bandwidth throttling in Internet Information Services (IIS) 5.0,
	although you are throttling to a very small amount of bandwidth, IIS may
	transfer a larger amount. This only occurs in some fringe cases.
	
	CAUSE
	=====
	
	The bandwidth throttler keeps a histogram that tracks transfers during the last
	six ten-second intervals. Bandwidth information is updated every ten seconds.
	When the measured bandwidth starts at zero, it stays there for the first ten
	seconds of activity.
	
	During that interval, a larger amount of bandwidth can be consumed. If you
	transfer large files, and have a low bandwidth limit, you will exceed the limit
	in one interval. At this point, the server blocks all transmissions for the next
	60 seconds, as the interval moves across the histogram. After 60 seconds, the
	interval, where all transmissions occurred, drops off the histogram. At this
	point, measured bandwidth is zero, and another 10 seconds of unrestricted
	transmission occurs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	5.0.
	
	Additional query words: IIS ntop IIS5 bandwidth throttling transfer
	
	======================================================================
	Keywords          : kbInternet kbDSupport kbiis500 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
