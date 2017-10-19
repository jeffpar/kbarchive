---
layout: page
title: "Q206835: SMS: Courier Sender Receives Incomplete Parcel"
permalink: /kb/206/Q206835/
---

## Q206835: SMS: Courier Sender Receives Incomplete Parcel

	Article: Q206835
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbPackage kbSender kbSMSSender
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Courier Sender Manager does not verify the contents of a parcel when writing
	and reading the media. Parcels that are incompletely written to the media, or
	modified after being written to the media, will be received with a success
	status at the destination site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	The following are some known conditions that may cause an invalid parcel:
	
	- The media does not have enough free space to record the whole parcel.
	
	- The media is removed before the complete parcel is written.
	
	- The media is modified after the parcel is written to it.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbPackage kbSender kbSMSSender 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
