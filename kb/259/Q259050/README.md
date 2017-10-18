---
layout: page
title: "Q259050: Unwanted Attribute Updates by Management Agent"
permalink: kb/259/Q259050/
---

## Q259050: Unwanted Attribute Updates by Management Agent

	Article: Q259050
	Product(s): Microsoft Windows NT
	Version(s): 2.1,2.2
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Microsoft Metadirectory Services Management Agent updates or overwrites an
	attribute value in the Metaverse or Connected Directory. This is an attribute
	that is maintained by you or another process, and you do not want the Management
	Agent to overwrite it.
	
	CAUSE
	=====
	
	This problem is caused by incorrectly configured attribute flow rules. Somewhere
	in the attribute flow rules the attribute is configured to be updated.
	
	RESOLUTION
	==========
	
	For purposes of explanation, this article uses the attribute TelephoneNumber as
	an example. Issues related to other attributes can be addressed in the same
	fashion.
	
	The prefix proceeding the attribute name identifies the location of the
	attribute. For example:
	
	$MV.TelephoneNumber - Identifies the Metaverse TelephoneNumber.
	$CS.TelephoneNumber - Identifies the Connector Space (Administration Area which
	tracks connectors in the metaverse) TelephoneNumber.
	$CD.TelephoneNumber - Identifies the Connected Directory (Exchange, Notes, Active
	Directory) TelephoneNumber.
	
	First identify the attribute flow rule that is causing the problem. There are
	three areas that must be checked: Specific Flow Rules, General Attribute Flow,
	and the Advanced Flow Script.
	
	Checking Specific Flow Rules To check specific flow rules, follow these steps:
	
	1. Start the Compass client.
	
	2. Select the Management Agent you want and select the Attribute Flow action.
	
	  By default, the Specific Flow Rules tab is displayed. The left pane lists the
	  available Metaverse attributes and the right pane displays the connected
	  directory attributes. The bottom pane displays the rules that are currently
	  configured.
	
	  If a specific flow rule has been created it will appear as follows:
	  $mv.telephonenumber = $cd.telephonenumber - The metaverse is being updated by
	  the connected directory.
	
	  -or-
	
	  $cd.telephonenumber = $mv.telephonenumber - The connected directory is being
	  updated by the metaverse.
	
	3. Select the flow rule to highlight it and click the Delete button.
	
	Checking General Attribute Flow Rules To check general attribute flow rules,
	follow these steps:
	
	1. Click the General Attribute Flow Rules tab.
	
	  This form allows you to configure general rules that affect all the attributes
	  related to a directory object. Only general rules can affect the Metaverse
	  (MV) or Connector Space (CS). Connected Directory (CD) assignments must be
	  specifically configured in either Specific or the Advanced area.
	
	2. If your $mv.telephonenumber is being overwritten, under the Metadirectory
	  Attributes section, click either Never or "When the metaverse attribute does
	  not exist".
	
	Checking the Advanced Flow Script To check the advanced flow script, follow these
	steps:
	
	1. Click the Advanced Flow Script tab.
	
	  When investigating this type of problem, you may see something similar to the
	  following:
	
	  IF $exists($mv.telephonenumber)=T
	  THEN
	  $mv.telephonenumber = $cd.telephonenumber
	
	2. Do one of the following:
	
	   - Comment the rule so it is not processed. For example:
	
	     #IF $exists($mv.telephonenumber)=T
	     #THEN
	     #$mv.telephonenumber = $cd.telephonenumber
	
	     -or-
	
	   - Change the rule, such that if the telephonenumber attribute is blank it
	     can be populated from the connected directory, and if it is not, no change
	     will be made. For example:
	
	     IF $exists($mv.telephonenumber)=F
	     THEN
	     $mv.telephonenumber = $cd.telephonenumber
	
	Additional query words: MMS Attribute Flow Management Agents Zoomit Via
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbMMSSearch kbMMS210 kbMMS220
	Version           : :2.1,2.2
	Issue type        : kbprb
	
	=============================================================================
	
