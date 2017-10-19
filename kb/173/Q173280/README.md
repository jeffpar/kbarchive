---
layout: page
title: "Q173280: XADM: Tracking Log Field Descriptions"
permalink: /kb/173/Q173280/
---

## Q173280: XADM: Tracking Log Field Descriptions

	Article: Q173280
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 03-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Tracking logs are created when message tracking is enabled on a Microsoft
	Exchange component. These logs can be read and edited by any text editor. The
	logs are tab delimited and can be loaded into spreadsheet programs, such as
	Microsoft Excel. You can also write an application to interpret message-tracking
	logs.
	
	MORE INFORMATION
	================
	
	Tracking logs are located in \Exchsrvr\Tracking.log. Each daily log is named by
	the date it was created (yyyymmdd.log format). The filename date, like all times
	in the tracking log, is in Greenwich Mean Time (GMT). The following table
	defines the fields in the tracking logs:
	
	Field #           Field Name                  Description
	=======           ==========                  ===========
	
	1             Message ID or MTS-ID        Message ID is a unique
	                                         identifier assigned to the
	                                         message by Microsoft Exchange
	                                         Server. It stays with the message
	                                         from its origination to delivery
	                                         or transfer from the network.
	
	                                         Messages from foreign systems
	                                         include a message transfer
	                                         system-ID (MTS-ID) that
	                                         uniquely identifies the
	                                         message transfer component
	                                         that transported the message.
	
	2             Event Number                Represents the event type.
	
	3             Date/Time                   Date and time of the event in
	                                         GMT.
	
	4             Gateway Name                Name of the gateway or the
	                                         connector that generated the
	                                         event. If no gateway was
	                                         involved, the field is blank.
	
	5             Partner Name                Name of the messaging service
	                                         associated with the event.
	                                         In Microsoft Exchange Server,
	                                         the partner is the MTA or the
	                                         information store.
	
	6             Remote ID                   The message ID used by the
	                                         gateway.
	
	7             Originator                  Distinguished name of the
	
	                                         originating mailbox, if known.
	8             Priority                    Priority set by the sender.
	
	                                         0  = Normal
	                                         1  = High
	                                         -1 = Low
	
	9             Length                      Message length in bytes.
	
	10            Seconds                     Transport time in seconds.
	
	                                         Not used by Microsoft Exchange
	                                         Server. The value in this
	                                         field is 0 or blank.
	
	11            Cost                        Cost per second for message
	                                         transfer.
	
	                                         Not used by Microsoft Exchange
	                                         Server. The value in this
	                                         field is always 1.
	
	12	     Subject-ID or Report MTS-ID This field is blank (empty) for
	                                         normal messages. For reports its
	                                         value is the Report MTS-ID.
	
	13            Recipients                  Numbers of recipients.
	
	14            Recipient Name              Distinguished name of the
	                                         recipient of the message or
	                                         a proxy address.
	
	                                         This field is separated from
	                                         the previous field by a linefeed.
	
	                                         The field is repeated for each
	                                         recipient.
	
	15            Recipient Report Status     A number representing the
	                                         result of an attempt to
	                                         deliver a report to the
	                                         recipient.
	
	                                         Delivered = 0
	                                         Not delivered = 1
	
	                                         This is used only for reports.
	                                         On other events, it will be
	                                         blank. This field is repeated
	                                         for each recipient.
	
	This information can also be found in the Microsoft Exchange Server 5.5
	Maintenance and Troubleshooting Guide on pages 138 and 139.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
