---
layout: page
title: "Q264893: Installer Overwrites Tmp File Using &quot;Insert Line into Text File&quot;"
permalink: /kb/264/Q264893/
---

## Q264893: Installer Overwrites Tmp File Using &quot;Insert Line into Text File&quot;

{% raw %}

	Article: Q264893
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the "Insert line into text file" option in Microsoft Systems
	Management Server (SMS) Installer, a temporary file named ~Glbs383.glb is
	created. When other clients on the network write to the same location, this
	temporary file may be overwritten.
	
	CAUSE
	=====
	
	This behavior can occur if you use a script that writes to a text file on a
	network drive. Different computers that run the script can update the same
	temporary .glb file.
	
	WORKAROUND
	==========
	
	To work around this behavior, first create the file locally, and then copy it to
	the network drive. Copy the local file from <Nameoftext>.txt to
	<Sharename Nameoftext>.txt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMSI200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
