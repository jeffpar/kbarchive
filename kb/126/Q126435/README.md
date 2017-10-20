---
layout: page
title: "Q126435: Automap Road Atlas: Road Symbols Print in Solid Black"
permalink: /kb/126/Q126435/
---

## Q126435: Automap Road Atlas: Road Symbols Print in Solid Black

{% raw %}

	Article: Q126435
	Product(s): Microsoft Automap
	Version(s): WINDOWS:3.0,3.02,3.03,3.04
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 04-MAY-1999
	
	3.00 3.02 3.03 3.04
	WINDOWS
	kbprint kb3rdparty kbgraphic kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Automap Road Atlas for Windows, versions 3.0, 3.02, 3.03, 3.04 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When printing from Automap Road Atlas for Windows, the road symbols on a route
	may print as a solid black symbol.
	
	RESOLUTION
	==========
	
	Workaround 1
	------------
	
	Change the installed Windows video display driver to VGA.
	
	For information about changing your video mode, see your Windows printed
	documentation or online Help.
	
	Workaround 2
	------------
	
	1. Run Automap Road Atlas.
	
	2. From the File menu, choose Print.
	
	3. Choose Options and select the Use Hatched Brushes box.
	
	Workaround 3
	------------
	
	To avoid this problem, install the Dell S3 video driver version 1.3 according to
	the manufacturer's instructions.
	
	MORE INFORMATION
	================
	
	The fault occurs because of a fault within the video driver and not the printer
	driver. The Dell S3 version 2.0 drivers can cause the problem to occur. Changing
	to the earlier version 1.3 video driver corrects the problem.
	
	The Dell S3 version 2.0 driver causes striping of the text on map printouts if
	the Print True Type as Graphics option is enabled. The problem does not occur
	with the Dell S3 version 1.3 video driver.
	
	The problem has been corrected in version 3.05 of Automap Road Atlas.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: reference printing route
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeMMsearch kbAutomapSearch kbAutomapRoadAtlas300 kbAutomapRoadAtlas302 kbAutomapRoadAtlas303 kbAutomapRoadAtlas304
	Version           : WINDOWS:3.0,3.02,3.03,3.04
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
