---
layout: page
title: "Q111581: BUG: Pie() Vertex Not Drawn Completely with Wide Pen"
permalink: /kb/111/Q111581/
---

## Q111581: BUG: Pie() Vertex Not Drawn Completely with Wide Pen

{% raw %}

	Article: Q111581
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling Pie() with a wide pen selected, the vertex of the pie slice is not
	drawn correctly. The wide lines do not meet at the vertex.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows versions 3.0 and 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This behavior may be reproduced as follows on an 8514 display:
	
	With a pen of width of about 30, call Pie() with the following parameters:
	
	  X1=197, Y1=179, X2=969, Y2=638, X3=334, Y3=525, X4=810, Y4=181
	
	At the center of the pie, the wide lines forming the vertex of the pie slice do
	not meet flush. A wedge is not filled in.
	
	Additional query words: buglist3.00 buglist3.10 3.00 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
