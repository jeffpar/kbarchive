---
layout: page
title: "Q177525: &quot;Fatal Exception 0D&quot; Error Message After Pressing CAPS LOCK Key"
permalink: /kb/177/Q177525/
---

## Q177525: &quot;Fatal Exception 0D&quot; Error Message After Pressing CAPS LOCK Key

{% raw %}

	Article: Q177525
	Product(s): Microsoft Home Miscellaneous Products
	Version(s): WINDOWS:1.0,2.0,5.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbhw kbimu kbHardwarekbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Automap Streets Plus for Windows, version 5.0 
	- Microsoft Automap Trip Planner for Windows, version 5.0 
	- Microsoft Creative Writer for Windows, version 2.0 
	- Microsoft Expedia Streets 98 
	- Microsoft Expedia Streets 98 Deluxe, version 1.0 
	- Microsoft Expedia Trip Planner 98 
	- Microsoft Plus! for Kids, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	WARNING: The information in this article has not been confirmed or tested by
	Microsoft. Some or all of the information in this article has been taken from
	unconfirmed customer reports. ANY USE BY YOU OF THE INFORMATION PROVIDED IN THIS
	ARTICLE IS AT YOUR OWN RISK. Microsoft provides this information "as is" without
	warranty of any kind, either express or implied, including but not limited to
	the implied warranties of merchantability and/or fitness for a particular
	purpose.
	
	If you press the CAPS LOCK key while you are typing in a box in any of the
	products listed above, you may receive the following error message on a blue
	screen:
	
	  A Fatal Exception 0D has occurred...
	
	Other symptoms may include the screen turning black or the computer not
	responding (hangs).
	
	CAUSE
	=====
	
	This behavior can occur when you use any of the products listed above on a
	Packard Bell computer.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	Method 1
	--------
	
	You can work around this issue by using the SHIFT key instead of the CAPS LOCK
	key while you are typing in a box.
	
	Method 2
	--------
	
	To resolve this issue, turn off the Software Wave Table Enabled setting by
	following these steps:
	
	1. Quit all programs that are running, and then restart the computer.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click System.
	
	4. Click the Device Manager tab.
	
	5. Double-click the Sound, Video And Game Controllers branch to expand it.
	
	6. One of the devices listed below the Sound, Video And Game Controllers branch
	  should have a Software Wave Table Enabled setting. You may have to check each
	  device for this setting. Locate and turn off this setting by following these
	  steps:
	
	  a. Click a device.
	
	  b. Click Properties.
	
	  c. Check each tab for a Software Wave Table Enabled setting.
	
	  d. If you find the Software Wave Table Enabled setting, click the check box
	     to clear it, and then skip to step 7.
	
	  e. If you do not find the Software Wave Table Enabled setting, click Cancel
	     to close the properties for the device, and then repeat steps A-D with
	     another device.
	
	7. Press OK, and then restart the computer.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For additional information about disabling the Software Wave Table Enabled
	setting, contact Packard Bell. For information about how to contact Packard
	Bell, see the following article in the Microsoft Knowledge Base:
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	
	
	Additional query words: mskids writer max cw2 amap pluskids plusmskids
	
	======================================================================
	Keywords          : kbenv kberrmsg kbhw kbimu kbHardware kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbAutomapSearch kbExpediaSearch kbGamesSearch kbPlusKids kbPlusSearch kbExpediaStreets98 kbExpediaStreets98del kbCreativeWriter200 kbAutomapStreetsPlus500 kbAutomapTripPlanner500
	Version           : WINDOWS:1.0,2.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
